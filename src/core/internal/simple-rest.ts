import { RestFactory } from "../../core/injectable/index.js";

/** @internal */
export class SimpleRestFactory extends RestFactory {
    constructor(hs: string, headers?: Record<string, string>) {
        super(hs, {
            "User-Agent": "@catengineer/matrix",
            ...headers,
        });
    }

    public setToken(token: string): this {
        this.headers.Authorization = `Bearer ${token}`;
        return this;
    }

    public async fetch(url: string, init?: RequestInit): Promise<Response> {
        return fetch(url, {
            ...init,
            headers: {
                ...this.headers,
                ...init?.headers,
            },
        });
    }
}
