export abstract class Logger {
    constructor(protected readonly name: string) {}
    public abstract info(...arguments_: any[]): void;
    public abstract warn(...arguments_: any[]): void;
    public abstract error(...arguments_: any[]): void;
    public abstract debug(...arguments_: any[]): void;
}

export default abstract class LoggerFactory {
    public abstract getLogger(name: string): Logger;
}
