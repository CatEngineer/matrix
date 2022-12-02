/* eslint-disable */
import { Entity, Manager } from "../../core/classes/index.js";
import { EventManager, RoomMemberManager, Self, type SyncData } from "../index.js";

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
    }

    public fromJSON(data: string): Room {
        const from = JSON.parse(data);
        return new Room(this, from)
    }

    private each<T>(record: T[] | undefined, callback: (value: T) => void): void;
    private each<T>(record: Record<string, T> | undefined, callback: (value: T) => void): void;
    private each<T>(record: Record<string, T> | T[] | undefined, callback: (value: T) => void): void {
        if (!record) return;
        if (Array.isArray(record)) {
            for (const value of record) callback(value);
            return;
        }

        const keys = Object.keys(record);
        for (const key of keys) {
            const value = record[key];
            if (value) callback(value);
        }
    }
}

export * from './members.js';
