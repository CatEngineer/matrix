import Bot from "./Bot.js";
import Command from "./commands/Command.js";
import CommandError from "./commands/CommandError.js";
import { CommandHandler, ParentCommandHandler } from "./commands/index.js";
import { RoomMessage } from "./types/mx-events.js";
import { OptionError } from "./types/options.js";

type Cmd = CommandHandler | ParentCommandHandler;

export default class Registry {
  private readonly cmdMap = new Map<string, Cmd>();

  constructor(private readonly bot: Bot) {}

  public get logger() {
    return this.bot.options.loggerFactory.getLogger("Registry");
  }

  public register(cmd: CommandHandler) {
    const name = this.buildCmdName(cmd.name);
    if (this.cmdMap.has(name))
      throw new Error(`Command ${name} already registered`);
    this.cmdMap.set(name, cmd);
  }

  public getCommand(name: string): CommandHandler | undefined {
    return this.cmdMap.get(this.buildCmdName(name));
  }

  public async handle(event: RoomMessage): Promise<void> {
    this.logger.debug(`Handling event ${event.id}, "${event.content.body}"`);
    const body = event.content.body.substring(this.bot.prefix.length);
    const [name, ...args] = this.buildArgs(body);
    this.logger.debug(name, args);
    if (!name) return;

    const cmdHandler = this.getCommand(name);
    if (!cmdHandler) return;

    try {
      const cmd = new Command(cmdHandler, event, args);
      await cmdHandler.handle(this.bot, cmd);
    } catch (err) {
      const room = event.getRoom();
      if (err instanceof CommandError) {
        await room.events.sendMarkdown(`**Error:** ${err.message}`);
      }
      if (err instanceof OptionError) {
        await room.events.sendMarkdown(
          `**Error:** Improper use of \`${this.bot.prefix}${name}\`\n\n` +
            "```\n" +
            `${cmdHandler.describe(this.bot.prefix)}\n` +
            "```"
        );
      } else {
        await event
          .getRoom()
          .events.sendMarkdown("**Internal Error** please contact admin.");
        this.logger.error("Internal error while handling command", err);
      }
    }
  }

  private buildArgs(str: string): string[] {
    const args: string[] = [];
    let arg = "";
    let inQuote = false;
    for (const char of str) {
      if (char === " " && !inQuote) {
        args.push(arg);
        arg = "";
      } else if (char === '"') {
        inQuote = !inQuote;
      } else arg += char;
    }
    args.push(arg);
    return args;
  }

  private buildCmdName(str: string): string {
    return str.toLocaleLowerCase().replaceAll(" ", "-");
  }
}
