import { Entity, Manager } from "../internal/index.js";
import type { Client } from "../core/index.js";
import type {
    SyncData,
    SyncParams as SyncParameters,
} from "./api.js";

export type SyncOptions = SyncParameters; 

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
    private static get defaultPullTimeout() {
        return 10_000;
    }

    private readonly options: SyncOptions & { timeout: number };

    constructor(
        client: Client,
        holds: string,
        options: SyncOptions
    ) {
        super(client, holds);
        this.options = {
            ...options,
            timeout: options.timeout ?? SyncManager.defaultPullTimeout,
        }
    }

    public sync(callback: (error?: Error, data?: SyncData) => void): void {
        let since: string;
        let timeoutId: NodeJS.Timer;
        const sync = async () => {
            // NOTE(dylhack): implicit object destruction to respect the inital
            //                next_batch passed to the constructor options.
            console.log(`Syncing since: ${this.options.since ?? "never"}`);
            try {
                const resp = await this.rest.matrix.sync(this.options);
                callback(undefined, resp.data);
                this.options.since = resp.data.next_batch;
            } catch (error: unknown) {
                if (error instanceof Error) callback(error);
                clearTimeout(timeoutId);
            }
        };

        sync()
            .then(() => {
                timeoutId = setInterval(
                    sync,
                    this.options.timeout,
                );
            })
            .catch((error) => {
                callback(error);
            });
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public fromJSON(data: string): SyncEntity {
        const from = JSON.parse(data) as SyncConstructData;
        return new SyncEntity(this, from);
    }
}
