import { EventEmitter } from "node:events";
import AuthManager from "../cs-api/auth.js";
import SyncManager from "../cs-api/sync.js";
import type { SyncOptions } from "../cs-api/sync.js";
import type {
    ApiConfig,
    SyncData,
} from "../cs-api/generated/matrix.js";
import { MxHttpClient } from "../cs-api/generated/matrix.js";
import CacheFactory from "../core/cache/index.js";
import type { CacheOptions } from "../core/cache/index.js";
import RoomManager from "../cs-api/rooms.js";
import EventManager from "../cs-api/events/events.js";

export type ClientOptions = {
    homeserverUrl: string;
    sync?: SyncOptions;
    rest?: ApiConfig;
    cache?: CacheOptions;
};

/** @internal */
type InternalOptions = {
    sync: SyncOptions;
    rest: ApiConfig<string>;
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

    public readonly events: EventManager;

    public readonly options: InternalOptions;

    /** @internal */
    public readonly cacheFactory: CacheFactory;

    constructor(options: ClientOptions) {
        super();
        this.options = {
            rest: {
                ...options.rest,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                baseURL: options.homeserverUrl,
                headers: {
                    ...Client.defaultHeaders,
                    ...options.rest?.headers,
                },
                secure: true,
                securityWorker: token => (
                    token
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    ? { headers: { Authorization: `Bearer ${token}` } }
                    : {}
                ),
            },
            sync: {},
        };
        this.rest = new MxHttpClient<string>(this.options.rest);
        this.cacheFactory = new CacheFactory(options.cache);

        // Managers
        this.auth = new AuthManager(this, "auth");
        this.sync = new SyncManager(this, "sync", this.options.sync);
        this.rooms = new RoomManager(this, "room");
        this.events = new EventManager(this, "event");
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

        this.rest.setSecurityData(token);
        this.sync.sync((error?: Error, data?: SyncData) => {
            if (error) {
                this.emit('error', error);
            }

            if (data) {
                this.handleSync(data).catch(error => {
                    this.emit('error', error);
                });
            }
        })

        return true;
    }

    public async logout(): Promise<void> {
        await this.auth.logout();
    }

    private async handleSync(data: SyncData): Promise<void> {
        await this.rooms.handleSync(data);
        // Finally emit to user-land
        this.emit('sync', data);
    }
}
