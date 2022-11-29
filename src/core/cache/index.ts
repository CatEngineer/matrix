import type AsyncCacheLayer from "./types/async-cache-layer.js";
import { createClient } from "redis";
import type { RedisClientType } from "redis";
import type SyncCacheLayer from "./types/cache-layer.js";
import RedisCacheLayer from "./redis-layer.js";
import SimpleCacheLayer from "./simple-layer.js";

export type CacheLayer<K, V> = AsyncCacheLayer<K, V> | SyncCacheLayer<K, V>;

export type CacheOptions = {
  redisUrl?: string;
}

export default class CacheFactory {
    private _redisClient?: RedisClientType = undefined;

    constructor(private readonly options?: CacheOptions) {}

    public async getCacheLayer<K, V>(holds: string): Promise<CacheLayer<K, V>> {
        if (this.options?.redisUrl) {
            const redisClient = await this.getRedisClient();
            return new RedisCacheLayer<K, V>(redisClient, holds);
        }

        return new SimpleCacheLayer<K, V>(holds);
    }

    private async getRedisClient(): Promise<RedisClientType> {
        if (!this._redisClient) {
            this._redisClient = createClient();
            await this._redisClient.connect();
        }

        return this._redisClient;
    }
}