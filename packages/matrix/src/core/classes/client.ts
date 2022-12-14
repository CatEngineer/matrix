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
    ErrorEvent,
    ReadyEvent,
    type RoomSpecificEvent,
    SyncEvent,
} from "../internal/events.js";
import type {
    LogEvent,
    RoomEvent,
    RoomStateEvent,
    RoomLeaveEvent,
} from "../internal/events.js";
import {
    SimpleCacheFactory,
    SimpleLoggerFactory,
    SimpleRestFactory,
} from "../internal/index.js";
import type { CustomEvent } from "../internal/events.js";
import Util from "./util.js";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface CustomListener<T> extends EventListener {
    (data: CustomEvent<T>): void;
}

type NodeListener<T> = (data: T) => void;

/**
 * @prop {SyncOptions?} sync (default: { timeout: 10_000 })
 * @prop {boolean?} botDisclosure Disclose to everyone you're a bot. (default: true)
 * @prop {RestFactory?} rest Custom REST client (default: SimpleRestFactory)
 * @prop {CacheFactory?} cache Custom cache (default: SimpleCacheFactory)
 * @prop {LoggerFactory?} logger Custom logger (default: SimpleLoggerFactory)
 */
export type ClientOptions = {
    botDisclosure?: boolean;
    sync?: SyncOptions;
    rest?: RestFactory;
    cache?: CacheFactory;
    logger?: LoggerFactory;
};

type InternalOptions = {
    botDisclosure: boolean;
    sync: SyncOptions;
    restFactory: RestFactory;
    cacheFactory: CacheFactory;
    loggerFactory: LoggerFactory;
    util: Util;
};

type CustomEvents = {
    debug: LogEvent<any>["detail"];
    sync: SyncEvent["detail"];
    error: ErrorEvent["detail"];
    ready: ReadyEvent["detail"];
    "room.state": RoomStateEvent<any>["detail"];
    "room.event": RoomEvent<any>["detail"];
    "room.leave": RoomLeaveEvent["detail"];
} & Record<string, RoomSpecificEvent<any>["detail"]>;

export default class Client extends EventTarget {
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
                    this.options.restFactory
                ),
            }
        );

        // Managers
        this.auth = new AuthManager(this, "auth");
        this.sync = new SyncManager(this, "sync", this.options.sync);
        this.rooms = new RoomManager(this, "room");
    }

    public get userId() {
        return this.auth.userId;
    }

    public async login(token: string): Promise<boolean>;
    public async login(username: string, password: string): Promise<boolean>;
    public async login(
        usernameOrToken: string,
        password?: string
    ): Promise<boolean> {
        this.logger.debug("Starting client with options:", this.options);
        const response = password
            ? await this.auth.login(usernameOrToken, password)
            : await this.auth.login(usernameOrToken);
        const token = response.access_token;

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
                this.dispatchEvent(new ErrorEvent(error));
            }

            if (data) {
                this.handleSync(data).catch((error) => {
                    this.dispatchEvent(new ErrorEvent(error));
                });
                if (init) {
                    this.logger.debug("Ready to go!");
                    this.dispatchEvent(new ReadyEvent());
                    init = false;
                }
            }
        });

        return true;
    }

    public async destroy(): Promise<void> {
        await this.logout();
    }

    public async logout(): Promise<void> {
        await this.auth.logout();
        this.sync.killSync();
    }

    public on<T extends keyof CustomEvents>(
        type: T,
        listener: NodeListener<CustomEvents[T]>
    ): this {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.addEventListener(type, (event: CustomEvent<CustomEvents[T]>) => {
            listener(event.detail);
        });
        return this;
    }

    public once<T extends keyof CustomEvents>(
        type: T,
        listener: NodeListener<CustomEvents[T]>
    ): this {
        const onEvent = (event: CustomEvent<CustomEvents[T]>) => {
            listener(event.detail);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.removeEventListener(type, onEvent);
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.addEventListener<T>(type, onEvent);
        return this;
    }

    public addEventListener<T extends keyof CustomEvents>(
        type: T,
        // eslint-disable-next-line @typescript-eslint/ban-types
        listener: CustomListener<CustomEvents[T]> | null
    ): void {
        super.addEventListener(type, listener);
    }

    private async handleSync(data: SyncData): Promise<void> {
        const start = Date.now();
        await this.rooms.handleSync(data);
        const end = Date.now();
        this.logger.debug(`Sync took ${end - start}ms to consume.`);
        // Finally emit to user-land
        this.dispatchEvent(new SyncEvent(data));
    }

    private get logger() {
        return this.options.loggerFactory.getLogger("client");
    }

    private buildOptions(
        hsUrl: string,
        options?: ClientOptions
    ): InternalOptions {
        return {
            cacheFactory: options?.cache ?? new SimpleCacheFactory(),
            loggerFactory: options?.logger ?? new SimpleLoggerFactory(this),
            restFactory: options?.rest ?? new SimpleRestFactory(hsUrl),
            util: new Util(),
            sync: options?.sync ?? {},
            botDisclosure: options?.botDisclosure ?? true,
        };
    }
}
