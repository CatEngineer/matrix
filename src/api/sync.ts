import { Entity, Manager } from "../internal/index.js";
import type { Client } from "../core/index.js";
import type {
    SyncData,
    SyncParams as SyncParameters,
} from "./api.js";

export type SyncOptions = SyncParameters & {
    pullTimeout?: number;
};

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

    constructor(
        client: Client,
        holds: string,
        protected readonly options: SyncOptions
    ) {
        super(client, holds);
    }

    public sync(callback: (error?: Error, data?: SyncData) => void): void {
        let since: string;
        let timeoutId: NodeJS.Timer;
        const sync = async () => {
            // NOTE(dylhack): implicit object destruction to respect the inital
            //                next_batch passed to the constructor options.
            const options: SyncOptions = since
                ? { ...this.options, since }
                : this.options;
            console.log(`Syncing since: ${since ?? "never"}`);
            try {
                const resp = await this.rest.matrix.sync(options);
                callback(undefined, resp.data);
                since = resp.data.next_batch;
            } catch (error: unknown) {
                if (error instanceof Error) callback(error);
                clearTimeout(timeoutId);
            }
        };

        sync()
            .then(() => {
                timeoutId = setInterval(
                    sync,
                    this.options.pullTimeout ?? SyncManager.defaultPullTimeout
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
