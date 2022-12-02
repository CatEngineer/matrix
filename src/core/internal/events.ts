import { CustomEvent } from "../classes/events.js";
import type { SyncData } from "../../index.js";
import type { MxEvent, MxStateEvent } from "../../index.js";

export type RoomLeaveEventData = {
    timeline: Array<MxEvent<any>>,
    state: Array<MxStateEvent<any>>,
}

/** @internal */
export class RoomLeaveEvent extends CustomEvent<RoomLeaveEventData & { roomId: string }> {
    constructor(roomId: string, data: RoomLeaveEventData) {
        super("room.leave", { detail: { ...data, roomId } });
    }
}

/** @internal */
export class RoomStateEvent<T> extends CustomEvent<MxStateEvent<T>> {
    constructor(event: MxStateEvent<T>) {
        super("room.state", { detail: event });
    }
}

/** @internal */
export class RoomEvent<T> extends CustomEvent<MxEvent<T>> {
    constructor(event: MxEvent<T>) {
        super("room.event", { detail: event });
    }
}

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

export { LogEvent } from "./simple-log.js";
