import Builder from "../core/builder.js";
import Entity from "../core/entity";
import Manager from "../core/manager.js";

type RawEvent = {

};

class Event extends Entity<EventManager> {

}

class EventBuilder extends Builder<RawEvent, Event> {
    public async build(from: RawEvent): Promise<Event> {
    }
}

export default class EventManager extends Manager<string, Event> {

}
