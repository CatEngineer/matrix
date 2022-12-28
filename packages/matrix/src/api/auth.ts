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
    private _userId?: string;

    public get userId() {
        if (!this._userId) this.logger.error('User ID was called before login');
        return this._userId ?? "";
    }

    public async login(token: string): Promise<MxApi.Anonymous38>;
    public async login(username: string, password: string): Promise<MxApi.Anonymous38>;
    public async login(
        usernameOrToken: string,
        password?: string
    ): Promise<MxApi.Anonymous16> {
        let resp: MxApi.Anonymous16 & { access_token: string };
        if (password) {
            const loginResp = await this.rest.login({
                type: "m.login.password",
                user: usernameOrToken,
                password,
            });
            resp = loginResp;
        } else {
            const loginResp = await this.loginWithToken(usernameOrToken);
            resp = loginResp;
        }

        this.logger.debug(`Logged in as ${resp.user_id}`, {
            ...resp,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            access_token: "REDACTED",
        });
        this._userId = resp.user_id;
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

    private async loginWithToken(
        token: string,
    ): Promise<MxApi.Anonymous38> {
        try {
            this.client.options.restFactory.setToken(token);
            const resp = await this.rest.getTokenOwner()
            return {
                ...resp,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                access_token: token,
                // NOTE(dylhack): This almost will never happen
                // eslint-disable-next-line @typescript-eslint/naming-convention
                device_id: resp.device_id ?? "",
                // eslint-disable-next-line @typescript-eslint/naming-convention
                user_id: resp.user_id,
            };
        } catch {
            return this.rest.login({ type: "m.login.token", token });
        }
    }
}
