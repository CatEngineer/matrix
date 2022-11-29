import type { CacheLayer } from "./cache/index.js";
import type Client from "./client.js";

export default abstract class Manager<K, V> {
    private _cache: CacheLayer<K, V> | undefined;

    constructor(
        public readonly client: Client,
        protected readonly holds: string
    ) {}

    public async getCache(): Promise<CacheLayer<K, V>> {
        if (!this._cache)
            this._cache = await this.cacheFactory.getCacheLayer<K, V>(
                this.holds,
            );
        return this._cache;
    }

    protected get rest() {
        return this.client.rest;
    }

    private get cacheFactory() {
        return this.client.cacheFactory;
    }
}
