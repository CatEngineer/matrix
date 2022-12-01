import { CustomEvent } from "../../core/classes/events.js";
import { type Client, Logger } from "../../core/index.js";

type Levels = "debug" | "error" | "warn" | "info";
export type Log = { name: string; args: any[] };

class LogEvent extends CustomEvent<Log> {
    constructor(level: Levels, name: string, _arguments: any[]) {
        super(`logger.${level}`, { 
            detail: { 
                name, 
                args: _arguments,
            } 
        });
    }
}

class SimpleLogger extends Logger {
    constructor(private readonly client: Client, name: string) {
        super(name);
    }

    public debug(...arguments_: any[]): void {
        this.emit("debug", this.name, ...arguments_);
    }

    public error(...arguments_: any[]): void {
        this.emit("error", this.name, ...arguments_);
    }

    public info(...arguments_: any[]): void {
        this.emit("info", this.name, ...arguments_);
    }

    public warn(...arguments_: any[]): void {
        this.emit("warn", this.name, ...arguments_);
    }

    private emit(level: Levels, name: string, ...arguments_: any[]): void {
        this.client.dispatchEvent(new LogEvent(level, name, arguments_));
    }
}

/** @internal */
export class SimpleLoggerFactory {
    constructor(private readonly client: Client) {}

    public getLogger(name: string): Logger {
        return new SimpleLogger(this.client, name);
    }
}
