import { Entity, Manager } from "../core/classes/index.js";
import type { MxApi } from "./api.js";

type SelfUserConstruct = {
    id: string;
    displayName?: string;
    avatarUrl?: string;
};

class SelfUser extends Entity<AuthManager> {
    private readonly data: SelfUserConstruct;

    constructor(manager: AuthManager, data: SelfUserConstruct) {
        super(manager, data.id);
        this.data = data;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public toJSON(): SelfUserConstruct {
        return this.data;
    }
}

export class AuthManager extends Manager<string, SelfUser> {
    public async login(token: string): Promise<MxApi.Anonymous38>;
    public async login(username: string, password: string): Promise<MxApi.Anonymous38>;
    public async login(
        usernameOrToken: string,
        password?: string
    ): Promise<MxApi.Anonymous38> {
        if (password) {
            const resp = await this.rest.login({
                  type: "m.login.password",
                  user: usernameOrToken,
                  password,
            });
            return resp;
        }

        const resp = await this.rest.login({
            type: "m.login.token",
            token: usernameOrToken,
        });
        return resp;
    }

    public async logout(): Promise<void> {
        await this.rest.logout();
    }

    public async logoutAll(): Promise<void> {
        await this.rest.logout_all();
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public fromJSON(data: string): SelfUser {
        const from = JSON.parse(data) as SelfUserConstruct;
        return new SelfUser(this, from);
    }
}
