export abstract class RestFactory {
    constructor(
        public readonly homeserverUrl: string,
        protected readonly headers: Record<string, string> = {},
    ) {}

    public abstract fetch(url: string, init?: RequestInit): Promise<Response>;

    public abstract setToken(token: string): this;
}
