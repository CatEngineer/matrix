import Bot from "../Bot.js";
import Command from "./Command.js";
import CommandHandler from "./CommandHandler.js";

export default class ParentCommandHandler extends CommandHandler {
  /** @internal */
  public async run(bot: Bot, cmd: Command): Promise<void> {
    const [subCmd, args] = this.getSubCommand(cmd);
    if (subCmd) {
      const newCmd = new Command(subCmd, cmd.event, args);
      await subCmd.handle(bot, newCmd);
    }
  }

  private getSubCommand(cmd: Command): [CommandHandler | undefined, string[]] {
    const [name, ...rest] = cmd.args;
    const result = this.subCommands.find((cmd) => cmd.name === name);
    return [result, rest];
  }
}
