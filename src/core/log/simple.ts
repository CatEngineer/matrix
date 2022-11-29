import { Logger } from "./index.js";
import type Client from "../client.js";

/** @internal */
export class SimpleLogger extends Logger {
    constructor(private readonly client: Client, name: string) {
        super(name);
    }

    public debug(...arguments_: any[]): void {
        this.client.emit("logger.debug", this.name, ...arguments_);
    }

    public error(...arguments_: any[]): void {
        this.client.emit("logger.error", this.name, ...arguments_);
    }

    public info(...arguments_: any[]): void {
        this.client.emit("logger.info", this.name, ...arguments_);
    }

    public warn(...arguments_: any[]): void {
        this.client.emit("logger.warn", this.name, ...arguments_);
    }
}

export default class SimpleLoggerFactory {
    constructor(private readonly client: Client) {}

    public getLogger(name: string): Logger {
        return new SimpleLogger(this.client, name);
    }
}
