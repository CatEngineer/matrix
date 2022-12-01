import { CustomEvent } from "../classes/events.js";
import type { SyncData } from "../../index.js";

/** @internal */
export class SyncEvent extends CustomEvent<SyncData> {
    constructor(data: SyncData) {
        super("sync", { detail: data });
    }
}

/** @internal */
export class ReadyEvent extends CustomEvent<undefined> {
    constructor() {
        super("ready", { detail: undefined });
    }
}

/** @internal */
export class ErrorEvent extends CustomEvent<Error> {
    constructor(error: Error) {
        super("error", { detail: error });
    }
}
