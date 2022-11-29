import Builder from "../../core/builder.js";
import Entity from "../../core/entity";
import Manager from "../../core/manager.js";
import type { GetOneEventData } from "../generated/matrix.js";


export default class EventManager extends Manager<string, Event<any>> {
    public async getEvent(roomId: string, id: string): Promise<GetOneEventData> {
        const resp = await this.rest.matrix.getOneRoomEvent(roomId, id);
        return resp.data;
    }
}
