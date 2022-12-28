/* eslint-disable */
import { Entity, Manager } from "../../core/classes/index.js";
import { RoomEvent, RoomLeaveEvent, RoomSpecificEvent, RoomStateEvent } from "../../core/internal/events.js";
import { EventManager, RoomMemberManager, Self, type SyncData } from "../index.js";
import { MxEvent, MxStateEvent } from "../index.js";

/** @internal */
export type RoomConstructData = {
    id: string;
}

export class Room extends Entity<RoomManager> {
    public readonly events: EventManager;

    public readonly members: RoomMemberManager;

    private readonly data: RoomConstructData;

    /** @internal */
    constructor(manager: RoomManager, data: RoomConstructData) {
        super(manager, data.id);
        this.events = new EventManager(this);
        this.members = new RoomMemberManager(this, `${this.id}-members`);
        this.data = data;
    }

    public async getSelf(): Promise<Self> {
        return this.members.getSelf();
    }

    public toJSON() {
        return this.data;
    }
}

export class RoomManager extends Manager<string, Room> {
    public async getRoom(id: string): Promise<Room> {
        const cache = await this.getCache();
        const cached = await cache.get(id);
        if (cached) return cached;

        const res = new Room(this, { id });
        await cache.set(id, res);
        return res;
    }

    public async getRooms(): Promise<Room[]> {
        const resp = await this.rest.getJoinedRooms();
        const rooms = resp.joined_rooms;
        const result: Promise<Room>[] = [];
        rooms.map((id) => result.push(this.getRoom(id)));
        return await Promise.all(result);
    }

    public async handleSync(data: SyncData): Promise<void> {
        // This is where all events are emitted
        this.util.each(data?.rooms?.join, (data, roomId) => {
            this.getRoom(roomId).then((room) => {
                data.state?.events?.forEach((event) => {
                    const emittable = new MxStateEvent(room.events, event);
                    this.client.dispatchEvent(new RoomStateEvent(emittable));
                    this.client.dispatchEvent(new RoomSpecificEvent(emittable));
                });
                data.timeline?.events?.forEach((event) => {
                    const emittable = new MxEvent(room.events, event);
                    this.client.dispatchEvent(new RoomEvent(emittable));
                    this.client.dispatchEvent(new RoomSpecificEvent(emittable));
                });
            });
        });
        this.util.each(data?.rooms?.leave, (data, roomId) => {
            this.getRoom(roomId).then((room) => {
                // TODO(dylhack): handle account data
                const timeline = (data.timeline?.events || []).map(ev => {
                    return new MxEvent(room.events, ev);
                });
                const state = (data.state?.events || []).map(ev => {
                    return new MxStateEvent(room.events, ev);
                });
                this.client.dispatchEvent(new RoomLeaveEvent({
                    roomId,
                    timeline, state,
                }));
            });
        });
    }

    public fromJSON(data: string): Room {
        const from = JSON.parse(data);
        return new Room(this, from)
    }
}

export * from "./events.js";
export * from './members.js';
