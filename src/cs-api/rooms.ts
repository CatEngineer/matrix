import Builder from "../core/builder.js";
import Entity from "../core/entity.js";
import Manager from "../core/manager.js";
import type { SyncData } from "./generated/matrix.js";


type RawRoom = {
    room_id: string;
}

export class Room extends Entity<RoomManager> {
}

class RoomBuilder extends Builder<RoomManager, RawRoom> {
    public async build(from: RawRoom): Promise<Room> {
        const entity = new Room(this.manager, from.room_id);
        return entity;
    }
}

export default class RoomManager extends Manager<string, Room> {
    public async handleSync(data: SyncData): Promise<void> {
        await this.handleJoins(data);
        await this.handleKicks(data);
        await this.handleInvites(data);
        await this.handleKnocks(data);
    }

    private async handleJoins(data: SyncData): Promise<void> {
        if (!data.rooms?.join) return;
        this.each(data.rooms.join, (room) => {
            this.each(room.state?.events, (state) => {
            });
        });
    }

    private async handleKicks(data: SyncData): Promise<void> {
        this.each(data.rooms?.leave, (room) => {
            this.each(room.state?.events, state => {
            })
        });
    }

    private async handleInvites(data: SyncData): Promise<void> {
        this.each(data.rooms?.invite, (room) => {
        });
    }

    private async handleKnocks(data: SyncData): Promise<void> {
        this.each(data.rooms?.knock, (room) => {
        });
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
