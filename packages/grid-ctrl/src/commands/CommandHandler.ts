import Bot from "../Bot.js";
import CommandError from "./CommandError.js";
import Command from "./Command.js";
import { PowerLevel } from "../types/mx-events.js";
import { Option } from "../types/options.js";

export type CommandHandlerOpt = {
  powerLevel?: PowerLevel;
  name: string;
  options?: Option[];
  commands?: CommandHandler[];
};

export default abstract class CommandHandler {
  public readonly powerLevel: PowerLevel;

  public readonly name: string;

  public readonly options: Option[];

  public readonly subCommands: CommandHandler[];

  constructor(opt: CommandHandlerOpt) {
    this.powerLevel = opt.powerLevel ?? 0;
    this.name = opt.name;
    this.options = opt.options ?? [];
    this.subCommands = opt.commands ?? [];
  }

  public async handle(bot: Bot, cmd: Command): Promise<void> {
    const { event } = cmd;
    // validate event
    if (event.content.msgtype !== "m.text") return;
    if (event.unsigned.redacted) return;

    // validate context
    const author = await event.getAuthor();
    const powerLevel = await author.getPowerLevel();
    const isOwner = bot.isOwner(author.id);
    if (powerLevel < this.powerLevel && !isOwner) {
      throw new CommandError("You don't have permission to use this command.");
    }
    await this.run(bot, cmd);
  }

  public abstract run(bot: Bot, cmd: Command): Promise<void>;

  protected throw(msg: string): never {
    throw new CommandError(msg);
  }

  public describe(prefix: string): string {
    let result = prefix + this.name;
    for (const opt of this.options) {
      result += ` [${opt.name}${opt.required ? '' : '?'}: ${opt.type}]`;
    }
    return result;
  }
}
