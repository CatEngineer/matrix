import { Entity, Manager } from "../../core/index.js";
import type { Room } from "../index.js";
import type { RoomMemberState, RoomMemberStateContent } from "./events.js";

/** @internal */
export type RoomMemberConstructData = {
    id: string;
    displayname?: string;
    avatar_url?: string;
    membership?: string;
};

export class RoomMember extends Entity<RoomMemberManager> {
    public readonly room: Room;

    public readonly nickname: string | undefined;

    public readonly avatarUrl: string | undefined;

    public readonly state: string;

    private readonly data: RoomMemberConstructData;

    /** @internal */
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

    public async getPowerLevel(): Promise<number> {
        const room = await this.getRoom();
        const powerLevels = await room.events.getPowerLevel();
        const uLevel = powerLevels.content.users[this.id];
        if (uLevel) return uLevel;
        return powerLevels.content.users_default;
    }

    public async getAvatar(): Promise<Buffer | undefined> {
        if (!this.avatarUrl) return;
        throw new Error("Not implemented");
    }

    public async getState(): Promise<RoomMemberState> {
        const room = await this.getRoom();
        const state = await room.events.getState<RoomMemberStateContent>(
            "m.room.member",
            this.id
        );
        return state;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public toJSON(): RoomMemberConstructData {
        return this.data;
    }
}

export class Self extends RoomMember {
    public async setDisplayName(displayname: string): Promise<void> {
        await this.setState({ displayname });
    }

    public async setAvatarUrl(avatarUrl: string): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        await this.setState({ avatar_url: avatarUrl });
    }

    public async setState(content: RoomMemberStateContent): Promise<void> {
        const state = await this.getState();
        const room = await this.getRoom();
        await room.events.setState("m.room.member", this.id, {
            ...state.content,
            ...content,
        });
    }
}

export class RoomMemberManager extends Manager<string, RoomMember> {
    constructor(private readonly room: Room, holds: string) {
        super(room.client, holds);
    }

    public async getMember(memberId: string): Promise<RoomMember> {
        const state = await this.room.events.getState(
            "m.room.member",
            memberId
        );
        return new RoomMember(this.room, { ...state.content, id: memberId });
    }

    public async getMembers(limit = 100): Promise<RoomMember[]> {
        const members = await this.room.events.getRoomState("m.room.member");
        return members.map(
            (member) =>
                new RoomMember(this.room, {
                    ...member.content,
                    id: member.stateKey,
                })
        );
    }

    public async getSelf(): Promise<Self> {
        const state = await this.room.events.getState(
            "m.room.member",
            this.client.auth.userId
        );
        return new Self(this.room, {
            ...state.content,
            id: this.client.auth.userId,
        });
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public fromJSON(data: string): RoomMember {
        const from = JSON.parse(data) as RoomMemberConstructData;
        return new RoomMember(this.room, from);
    }
}
