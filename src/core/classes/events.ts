import type {
    ErrorEvent,
    LogEvent,
    ReadyEvent,
    RoomEvent,
    RoomLeaveEvent,
    RoomSpecificEvent,
    RoomStateEvent,
    SyncEvent,
} from "../internal/events.js";
import type { ToString } from "../internal/events.js";

// Events
export type LogEventData<T extends ToString> = LogEvent<T>["detail"];
export type RoomSpecificEventData<T> = RoomSpecificEvent<T>["detail"];
export type RoomLeaveEventData = RoomLeaveEvent["detail"];
export type RoomStateEventData<T> = RoomStateEvent<T>["detail"];
export type RoomEventData<T> = RoomEvent<T>["detail"];
export type SyncEventData = SyncEvent["detail"];
export type ReadyEventData = ReadyEvent["detail"];
export type ErrorEventData = ErrorEvent["detail"];
