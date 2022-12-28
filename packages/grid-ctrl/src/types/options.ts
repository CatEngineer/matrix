import { Util as MxUtil } from "@catengineer/matrix";
import CommandError from "../commands/CommandError.js";
import Util from "../Util.js";

const mxUtil = new MxUtil()

export class OptionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const optCheck = {
    string: (opt: Option, value: string): string => value,
    number: (opt: Option, value: string): number => {
        const num = +value;
        if (isNaN(num)) throw new CommandError(`Invalid number: ${num}`);
        return num;
    },

    integer: (opt: Option, value: string): number => {
        const num = +value;
        if (isNaN(num)) throw new CommandError(`Invalid number: ${num}`);
        if (!Number.isInteger(num)) throw new CommandError(`Invalid integer: ${num}`);
        return num;
    },

    boolean: (opt: Option, value: string): boolean => {
        const bool = Util.castBool(value);
        if (!bool) throw new CommandError(`Invalid boolean: ${bool}`);
        return bool;
    },

    user_id: (opt: Option, value: string): string => {
        if (!mxUtil.isUserId(value)) 
          throw new CommandError(`Invalid user ID: ${value}`);
        return value;
    },

    room_id: (opt: Option, value: string): string => {
        if (!mxUtil.isRoomId(value))
          throw new CommandError(`Invalid room ID: ${value}`);
        return value;
    },

    event_id: (opt: Option, value: string): string => {
        if (!mxUtil.isEventId(value)) 
          throw new CommandError(`Invalid event ID: ${value}`);
        return value;
    },
}

export type Option = {
  type: keyof typeof optCheck;
  name: string;
  required?: boolean;
};
