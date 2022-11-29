import type Client from "../core/client.js";
import Manager from "../core/manager.js";
import type {
    SyncData,
    SyncParams as SyncParameters,
} from "./generated/matrix.js";

export type SyncOptions = SyncParameters & {
    pullTimeout?: number;
}

export default class SyncManager extends Manager<string, SyncData> {
    private static get defaultPullTimeout() { return 10_000; }

    constructor(
        client: Client,
        holds: string,
        protected readonly options: SyncOptions,
    ) {
        super(client, holds);
    }

    public sync(callback: (error?: Error, data?: SyncData) => void): void {
        let nextBatch: string;
        let timeoutId: NodeJS.Timer;
        const sync = async () => {
            // NOTE(dylhack): implicit object destruction to respect the inital
            //                next_batch passed to the constructor options.
            const options: SyncOptions = nextBatch
                ? { ...this.options, since: nextBatch }
                : this.options;
            try {
                const resp = await this.rest.matrix.sync(this.options);
                callback(undefined, resp.data);
                nextBatch = resp.data.next_batch;
            } catch (error: unknown) {
                if (error instanceof Error)
                    callback(error);
                clearTimeout(timeoutId);
            }
        }

        sync().then(() => {
            timeoutId = setInterval(sync,
                this.options.pullTimeout ?? SyncManager.defaultPullTimeout,
            );
        }).catch(error => {
            callback(error);
        });
    }
}
