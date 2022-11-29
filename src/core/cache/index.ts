import { createClient } from "redis";
import type { RedisClientType } from "redis";
import type AsyncCacheLayer from "./types/async-cache-layer.js";
import type SyncCacheLayer from "./types/cache-layer.js";
import type Entity from "../entity.js";
import type Manager from "../manager.js";
import RedisCacheLayer from "./redis-layer.js";
import SimpleCacheLayer from "./simple-layer.js";

export type CacheLayer<K = any, V extends Entity<any> = any> = AsyncCacheLayer<K, V> | SyncCacheLayer<K, V>;

export type CacheOptions = {
  redisUrl?: string;
}

export default class CacheFactory {
    private _redisClient?: RedisClientType = undefined;

    constructor(private readonly options?: CacheOptions) {}

    public async getCacheLayer<K, V extends Entity<any>>(
        manager: Manager<K, V>,
        holds: string): Promise<CacheLayer<K, V>> {
        if (this.options?.redisUrl) {
            const redisClient = await this.getRedisClient();
            return new RedisCacheLayer<K, V>(redisClient, manager, holds);
        }

        return new SimpleCacheLayer<K, V>(manager, holds);
    }

    private async getRedisClient(): Promise<RedisClientType> {
        if (!this._redisClient) {
            this._redisClient = createClient();
            await this._redisClient.connect();
        }

        return this._redisClient;
    }
}
