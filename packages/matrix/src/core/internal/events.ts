import type { SyncData } from "../../index.js";
import type { AnyMxEvent, MxEvent, MxStateEvent } from "../../index.js";

type CustomEventInit<T> = { detail: T } & EventInit;

export class CustomEvent<T> extends Event {
    /** Returns any custom data event was created with. Typically used for synthetic events. */
    public readonly detail: T;

    constructor(type: string, eventInitDict: CustomEventInit<T>) {
        super(type, eventInitDict)
        this.detail = eventInitDict.detail;
    }
}

type RoomLeaveEventData = {
    timeline: Array<MxEvent<any>>;
    state: Array<MxStateEvent<any>>;
    roomId: string;
}

export class RoomSpecificEvent<T> extends CustomEvent<AnyMxEvent<T>> {
    /** @internal */
    constructor(event: AnyMxEvent<T>) {
        super(event.type, { detail: event });
    }
}

export class RoomLeaveEvent extends CustomEvent<RoomLeaveEventData> {
    /** @internal */
    constructor(data: RoomLeaveEventData) {
        super("room.leave", { detail: data });
    }
}

export class RoomStateEvent<T> extends CustomEvent<MxStateEvent<T>> {
    /** @internal */
    constructor(event: MxStateEvent<T>) {
        super("room.state", { detail: event });
    }
}

export class RoomEvent<T> extends CustomEvent<MxEvent<T>> {
    /** @internal */
    constructor(event: MxEvent<T>) {
        super("room.event", { detail: event });
    }
}

export class SyncEvent extends CustomEvent<SyncData> {
    /** @internal */
    constructor(data: SyncData) {
        super("sync", { detail: data });
    }
}

export class ReadyEvent extends CustomEvent<undefined> {
    /** @internal */
    constructor() {
        super("ready", { detail: undefined });
    }
}

export class ErrorEvent extends CustomEvent<Error> {
    /** @internal */
    constructor(error: Error) {
        super("error", { detail: error });
    }
}

/** @internal */
export type LogLevels = "debug" | "error" | "warn" | "info";
export type Log = { level: LogLevels, name: string; args: any[] };
/** @internal */
export type ToString = {
    toString(): string;
}

export class LogEvent<T extends ToString> extends CustomEvent<Log> {
    /** @internal */
    constructor(level: LogLevels, name: string, _arguments: T[]) {
        super('debug', { 
            detail: { 
                name, 
                level,
                args: _arguments,
            } 
        });
    }
}
