import type Client from "./client.js";

export default class Base {
    protected constructor(public readonly client: Client) {}

    protected get util() {
        return this.client.options.util;
    }

    protected get logger() {
        return this.client.options.loggerFactory.getLogger(this.constructor.name);
    }

    protected get rest() {
        return this.client.rest;
    }

    protected get cacheFactory() {
        return this.client.options.cacheFactory;
    }
}
