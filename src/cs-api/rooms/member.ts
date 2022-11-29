import Entity from "../../core/entity.js";
import Manager from "../../core/manager.js";
import type { Room } from "../rooms.js";

/** @internal */
export type RoomMemberConstructData = {
    id: string;
    displayname?: string;
    avatar_url?: string;
    membership?: string;
}

/** @internal */
export class RoomMember extends Entity<RoomMemberManager> {
    public readonly room: Room;

    public readonly nickname: string | undefined;

    public readonly avatarUrl: string | undefined;

    public readonly state: string;

    private readonly data: RoomMemberConstructData;

    constructor(room: Room, opt: RoomMemberConstructData) {
        super(room.members, opt.id);
        this.room = room;
        this.nickname = opt.displayname;
        this.avatarUrl = opt.avatar_url;
        this.state = opt.membership ?? "join";
        this.data = opt;
    }

    public getDisplayName(): string {
        return this.nickname ?? this.id;
    }

    public async getRoom(): Promise<Room> {
        return this.client.rooms.getRoom(this.room.id);
    }

    public async getAvatar(): Promise<Buffer | undefined> {
        if (!this.avatarUrl) return;
        throw new Error('Not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public toJSON(): RoomMemberConstructData {
        return this.data;
    }
}

export default class RoomMemberManager extends Manager<string, RoomMember> {
    constructor(
        private readonly room: Room,
        holds: string,
    ) {
        super(room.client, holds);
    }

    public async getMember(memberId: string): Promise<RoomMember> {
        const state = await this.room.events.getState('m.room.member', memberId);
        return new RoomMember(this.room, { ...state.content, id: memberId });
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public fromJSON(data: string): RoomMember {
        const from = JSON.parse(data) as RoomMemberConstructData;
        return new RoomMember(this.room, from);
    }
}
