import Bot from "../Bot.js";
import { RoomMessage } from "../types/mx-events.js";
import { optCheck, OptionError } from "../types/options.js";
import CommandError from "./CommandError.js";
import CommandHandler from "./CommandHandler.js";

type OptVal = string | number | boolean;

export default class Command {
    constructor(
        private readonly cmd: CommandHandler,
        public readonly event: RoomMessage,
        public readonly args: string[],
    ) {}

    public getOption<T>(name: string, force: false): T | undefined;
    public getOption<T>(name: string, force: true): T;
    public getOption<T>(name: string, force= false): T | undefined {
        const i = this.cmd.options.findIndex((opt) => opt.name === name);
        const option = this.cmd.options[i];
        if (i === -1) throw new Error(`Option "${name}" not found`);
        const arg = this.args[i];

        if (!arg || !option) throw new OptionError(`Option "${name}" is required`);
        if (force) {
            return optCheck[option.type](option, arg) as T;
        }
        try {
            if (!option) return undefined;
            return optCheck[option.type](option, arg) as T;
        } catch { return undefined; }
    }
}
