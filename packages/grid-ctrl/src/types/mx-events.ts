import { MxEvent } from "@catengineer/matrix";

export type PowerLevel = number | "OWNER_ONLY";

export type RoomMessage = MxEvent<{
  body: string;
  msgtype: string;
  format?: string;
  formatted_body?: string;
}>;
