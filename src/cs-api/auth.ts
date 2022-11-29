import Manager from "../core/manager.js";
import type { LoginData } from "./generated/matrix.js";

export default class AuthManager extends Manager<string, LoginData> {
    public async login(token: string): Promise<LoginData>;
    public async login(username: string, password: string): Promise<LoginData>;
    public async login(
        usernameOrToken: string,
        password?: string
    ): Promise<LoginData> {
        if (password) {
            const resp = await this.rest.matrix.login({
                  type: "m.login.password",
                  user: usernameOrToken,
                  password,
            });
            return resp.data;
        }

        const resp = await this.rest.matrix.login({
            type: "m.login.token",
            token: usernameOrToken,
        });
        return resp.data;
    }

    public async logout(): Promise<void> {
        await this.rest.matrix.logout();
    }

    public async logoutAll(): Promise<void> {
        await this.rest.matrix.logoutAll();
    }
}
