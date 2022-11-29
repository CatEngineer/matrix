import Entity from "../core/entity.js";
import Manager from "../core/manager.js";
import type { SyncData } from "./generated/matrix.js";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Room {

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
                console.log(state.content);
            });
        });
    }

    private async handleKicks(data: SyncData): Promise<void> {
        this.each(data.rooms?.leave, (room) => {
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
