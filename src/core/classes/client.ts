import { EventEmitter } from "node:events";
import { MxApi } from "../../api/api.js";
import {
    AuthManager,
    SyncManager,
    RoomManager,
    type SyncOptions,
    type SyncData,
} from "../../api/index.js";
import type {
    RestFactory,
    LoggerFactory,
    CacheFactory,
} from "../injectable/index.js";
import {
    SimpleCacheFactory,
    SimpleLoggerFactory,
    SimpleRestFactory,
} from "../internal/index.js";
import Util from "./util.js";

type ClientOptions = {
    sync?: SyncOptions;
    rest?: RestFactory;
    cache?: CacheFactory;
    logger?: LoggerFactory;
};

/** @internal */
type InternalOptions = {
    sync: SyncOptions;
    restFactory: RestFactory;
    cacheFactory: CacheFactory;
    loggerFactory: LoggerFactory;
    util: Util;
};

type LogListener = (name: string, ...arguments_: any[]) => void;

// NOTE(dylhack): Replace EventEmitter with EventTarget once it stabalizes
// - https://github.com/microsoft/TypeScript/issues/28357
// - NodeJS labels "CustomEvens" as expiremental
export default class Client extends EventEmitter {
    public readonly rest: MxApi.MxHttpClient;

    public readonly auth: AuthManager;

    public readonly sync: SyncManager;

    public readonly rooms: RoomManager;

    public readonly options: InternalOptions;

    constructor(homeserverUrl: string, options?: ClientOptions) {
        super();
        this.options = this.buildOptions(homeserverUrl, options);
        this.rest = new MxApi.MxHttpClient(
            this.options.restFactory.homeserverUrl,
            { 
                fetch: this.options.restFactory.fetch.bind(
                    this.options.restFactory,
                ),
            },
        );

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
        this.options.restFactory.setToken(token);
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

    private buildOptions(hsUrl: string, options?: ClientOptions): InternalOptions {
        return {
            cacheFactory: options?.cache ?? new SimpleCacheFactory(),
            loggerFactory: options?.logger ?? new SimpleLoggerFactory(this),
            restFactory: options?.rest ?? new SimpleRestFactory(hsUrl),
            util: new Util(),
            sync: options?.sync ?? {},
        };
    }
}


// All Events
declare module "node:events" {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface EventEmitter {
        on(event: "ready", listener: () => void): this;
        on(event: "error", listener: (error: Error) => void): this;
        on(event: "sync", listener: (data: SyncData) => void): this;
        // Logger Stuff
        on(event: "logger.debug", listener: LogListener): this;
        on(event: "logger.error", listener: LogListener): this;
        on(event: "logger.info", listener: LogListener): this;
        on(event: "logger.warn", listener: LogListener): this;
    }
}
