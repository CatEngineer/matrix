import type Client from "./client.js";
import type Manager from "./manager.js";

export default class Entity<T extends Manager<any, any>> {
    public readonly client: Client;

    constructor(
        public readonly manager: T, 
        public readonly id: string,
    ) {
        this.client = manager.client;
    }
}
