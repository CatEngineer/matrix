import { EventEmitter } from "node:events";
import AuthManager from "../cs-api/auth.js";
import SyncManager from "../cs-api/sync.js";
import type { SyncOptions } from "../cs-api/sync.js";
import type { ApiConfig, SyncData } from "../cs-api/generated/matrix.js";
import { MxHttpClient } from "../cs-api/generated/matrix.js";
import CacheFactory from "../core/cache/index.js";
import type { CacheOptions } from "../core/cache/index.js";
import RoomManager from "../cs-api/rooms.js";
import type LoggerFactory from "./log/index.js";
import SimpleLoggerFactory from "./log/simple.js";
import Util from "./util.js";

export type ClientOptions = {
    homeserverUrl: string;
    sync?: SyncOptions;
    rest?: ApiConfig;
    cache?: CacheFactory | CacheOptions;
};

/** @internal */
type InternalOptions = {
    sync: SyncOptions;
    rest: ApiConfig<string>;
    cacheFactory: CacheFactory;
    loggerFactory: LoggerFactory;
    util: Util;
};

// NOTE(dylhack): Replace EventEmitter with EventTarget once it stabalizes
// - https://github.com/microsoft/TypeScript/issues/28357
// - NodeJS labels "CustomEvens" as expiremental
export default class Client extends EventEmitter {
    private static get defaultHeaders() {
        return {
            "Content-Type": "application/json",
            "User-Agent": "eng-matrix",
        };
    }

    public readonly rest: MxHttpClient<string>;

    public readonly auth: AuthManager;

    public readonly sync: SyncManager;

    public readonly rooms: RoomManager;

    public readonly options: InternalOptions;

    constructor(homeserverUrl: string);
    constructor(options: ClientOptions);
    constructor(options: string | ClientOptions) {
        super();
        this.options = this.buildOptions(options);
        this.rest = new MxHttpClient<string>(this.options.rest);

        // Managers
        this.auth = new AuthManager(this, "auth");
        this.sync = new SyncManager(this, "sync", this.options.sync);
        this.rooms = new RoomManager(this, "room");
    }

    public async login(token: string): Promise<boolean>;
    public async login(username: string, password: string): Promise<boolean>;
    public async login(
        usernameOrToken: string,
        password?: string
    ): Promise<boolean> {
        let token: string;
        if (password) {
            const response = await this.auth.login(usernameOrToken, password);
            token = response.access_token;
        } else token = usernameOrToken;

        let init = true;
        this.rest.setSecurityData(token);
        if (!this.options.sync.since) {
            this.logger.warn(
                "No sync token provided. Performing full sync," +
                " this might take a while."
            );
        }

        this.sync.sync((error?: Error, data?: SyncData) => {
            if (error) {
                this.emit("error", error);
            }

            if (data) {
                this.handleSync(data).catch((error) => {
                    this.emit("error", error);
                });
                if (init) {
                    this.logger.debug("Ready to go!");
                    this.emit("ready");
                    init = false;
                }
            }
        });

        return true;
    }

    public async logout(): Promise<void> {
        await this.auth.logout();
    }

    private async handleSync(data: SyncData): Promise<void> {
        const start = Date.now();
        await this.rooms.handleSync(data);
        const end = Date.now();
        this.logger.debug(`Sync took ${end - start}ms to consume.`);
        // Finally emit to user-land
        this.emit("sync", data);
    }

    private get logger() {
        return this.options.loggerFactory.getLogger("client");
    }

    private buildOptions(options: ClientOptions | string): InternalOptions {
        const isString = typeof options === "string";
        const result: InternalOptions = {
            cacheFactory: new CacheFactory(),
            loggerFactory: new SimpleLoggerFactory(this),
            util: new Util(),
            sync: {},
            rest: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                baseURL: isString ? options : options.homeserverUrl,
                headers: { ...Client.defaultHeaders },
                secure: true,
                securityWorker: (token) =>
                    token
                        ? // eslint-disable-next-line @typescript-eslint/naming-convention
                          { headers: { Authorization: `Bearer ${token}` } }
                        : {},
            },
        };
        if (!isString) {
            result.rest = { ...result.rest, ...options.rest };
            result.rest.headers = {
                ...result.rest.headers,
                ...options.rest?.headers,
            };
        }

        return result;
    }
}

// All Events
declare module "node:events" {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface EventEmitter {
        on(event: "sync", listener: (data: SyncData) => void): this;
        on(
            event: "logger.debug",
            listener: (name: string, ...arguments_: any[]) => void
        ): this;
        on(
            event: "logger.error",
            listener: (name: string, ...arguments_: any[]) => void
        ): this;
        on(
            event: "logger.info",
            listener: (name: string, ...arguments_: any[]) => void
        ): this;
        on(
            event: "logger.warn",
            listener: (name: string, ...arguments_: any[]) => void
        ): this;
        on(event: "ready", listener: () => void): this;
    }
}
