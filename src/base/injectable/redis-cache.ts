import { createClient } from "redis";
import type { RedisClientType } from "redis";
import type { Entity, Manager } from "../../internal/index.js";
import { AsyncCacheLayer, CacheFactory } from "../../core/index.js";

/** @internal */
class RedisCacheLayer<K, V extends Entity<any>> extends AsyncCacheLayer<K, V> {
    constructor(
        private readonly client: RedisClientType,
        manager: Manager<K, V>,
        holds: string,
    ) { super(manager, holds); }

    public async get(key: K): Promise<V | undefined> {
        const value = await this.client.hGet(this.holds, this.getKey(key));
        if (!value) return;
        return JSON.parse(value) as V;
    }

    public async set(key: K, value: V): Promise<void> {
        await this.client.hSet(this.holds, this.getKey(key), JSON.stringify(value));
    }

    public async delete(key: K): Promise<void> {
        await this.client.hDel(this.holds, this.getKey(key));
    }

    public async clear(): Promise<void> {
        await this.client.del(this.holds);
    }

    public async forEach(
        callbackfn: (value: V, key: K, map: AsyncCacheLayer<K, V>) => void,
        thisArgument?: any
    ): Promise<void> {
        const all = await this.entries();
        for (const [key, value] of all) {
            callbackfn.call(thisArgument, value, key, this);
        }
    }

    public async has(key: K): Promise<boolean> {
        return this.client.hExists(this.holds, this.getKey(key));
    }

    public async getSize(): Promise<number> {
        return this.client.hLen(this.holds);
    }

    public async entries(): Promise<IterableIterator<[K, V]>> {
        return this[Symbol.iterator]();
    }

    public async keys(): Promise<IterableIterator<K>> {
        const all = await this.client.hKeys(this.holds);
        return all.map((key) => JSON.parse(key) as K)[Symbol.iterator]();
    }

    public async values(): Promise<IterableIterator<V>> {
        const all = await this.client.hVals(this.holds);
        return all.map((value) => JSON.parse(value) as V)[Symbol.iterator]();
    }

    public async [Symbol.iterator](): Promise<IterableIterator<[K, V]>> {
        const all = await this.client.hGetAll(this.holds);
        return Object.entries(all).map(
            ([key, value]) => [JSON.parse(key),  this.manager.fromJSON(value)] as [K, V],
        )[Symbol.iterator]();
    }

    private getKey(key: K): string {
        // NOTE(dylhack): this will do for now. We can improve this later.
        return JSON.stringify(key);
    }
}

export class RedisCacheFactory extends CacheFactory {
    private _redisClient?: RedisClientType = undefined;

    constructor(private readonly redisUrl: string) { super(); }

    public async getCacheLayer<K, V extends Entity<any>>(
        manager: Manager<K, V>,
        holds: string,
    ): Promise<RedisCacheLayer<K, V>> {
        const redisClient = await this.getRedisClient();
        return new RedisCacheLayer(redisClient, manager, holds);
    }

    private async getRedisClient(): Promise<RedisClientType> {
        if (!this._redisClient) {
            this._redisClient = createClient({ url: this.redisUrl });
            await this._redisClient.connect();
        }

        return this._redisClient;
    }
}
