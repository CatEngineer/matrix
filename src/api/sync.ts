import { type Client, Entity, Manager } from "../core/index.js";
import type { MxApi } from "./api.js";

export type SyncOptions = {
    filter?: string;
    since?: string;
    fullState?: boolean;
    setPresence?: MxApi.Set_presence;
    timeout?: number;
    killOnError?: boolean;
};

export type SyncData = MxApi.Anonymous69;

type SyncConstructData = {
    batchId: string;
};

export class SyncEntity extends Entity<SyncManager> {
    private readonly data: SyncConstructData;

    constructor(manager: SyncManager, data: SyncConstructData) {
        super(manager, data.batchId);
        this.data = data;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public toJSON(): SyncConstructData {
        return this.data;
    }
}

export class SyncManager extends Manager<string, SyncEntity> {
    private timers: number[] = [];

    private static get defaultPullTimeout() {
        return 10_000;
    }

    private readonly options: SyncOptions & { 
        timeout: number,
        killOnError: boolean,
     };

    constructor(client: Client, holds: string, options: SyncOptions) {
        super(client, holds);
        this.options = {
            timeout: options.timeout ?? SyncManager.defaultPullTimeout,
            killOnError: true,
            ...options,
        };
    }

    /** @internal */
    public sync(callback: (error?: Error, data?: SyncData) => void): void {
        const sync = async () => {
            // NOTE(dylhack): implicit object destruction to respect the inital
            //                next_batch passed to the constructor options.
            this.logger.debug(`Syncing since: ${this.options.since ?? "never"}`);
            try {
                const resp = await this.rest.sync(
                    this.options.filter,
                    this.options.since,
                    this.options.fullState,
                    this.options.setPresence
                );
                callback(undefined, resp);
                this.options.since = resp.next_batch;
            } catch (error: unknown) {
                if (error instanceof Error) callback(error);
            }
        };

        sync()
            .then(() => {
                const timeoutId = setInterval(sync, this.options.timeout);
                if (typeof timeoutId === "number") this.timers.push(timeoutId);
                else this.timers.push(timeoutId[Symbol.toPrimitive]());
            })
            .catch((error) => {
                if (this.options.killOnError) this.killSync();
                callback(error);
            });
    }

    public killSync() {
        for (const t of this.timers) clearTimeout(t);
        this.timers = [];
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public fromJSON(data: string): SyncEntity {
        const from = JSON.parse(data) as SyncConstructData;
        return new SyncEntity(this, from);
    }
}
