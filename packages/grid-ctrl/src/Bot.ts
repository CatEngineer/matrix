import Client, { ClientOptions, MxEvent } from "@catengineer/matrix";
import Registry from "./Registry.js";
import { RoomMessage } from "./types/mx-events.js";

type BotOptions = {
    prefix: string;
    owners?: string | string[];
    isSelfBot?: boolean;
} & ClientOptions;

export default class Bot extends Client {
    public readonly owners: string[];

    private readonly isSelfBot: boolean;

    public readonly prefix: string;

    public readonly registry: Registry;

    constructor(homeServerUrl: string, opt: BotOptions) {
        super(homeServerUrl, opt);
        if (typeof opt.owners === 'string') {
            this.owners = [opt.owners];
        } else this.owners = opt.owners ?? [];
        this.isSelfBot = opt.isSelfBot ?? false;
        this.prefix = opt.prefix;
        this.registry = new Registry(this);
    }

    /** @internal */
    public isOwner(id: string): boolean  {
        return this.owners.includes(id);
    }

    public async login(token: string): Promise<boolean>;
    public async login(username: string, password: string): Promise<boolean>;
    public async login(username: string, password?: string): Promise<boolean> {
        this.on('m.room.message', (event: RoomMessage) => {
            if (event.isRedacted()) return;
            if (!event.content.body.startsWith(this.prefix)) return;
            if (event.senderId === this.userId && !this.isSelfBot) return;
            this.registry.handle(event);
        });
        if (password) return super.login(username, password);
        else return super.login(username);
    }
}
