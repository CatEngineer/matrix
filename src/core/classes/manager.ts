import Base from "./base.js";
import type Client from "./client.js";
import type Entity from "./entity.js";
import type { CacheLayer } from "../injectable/index.js";

export default abstract class Manager<K, V extends Entity<any>> extends Base {
    private _cache: CacheLayer<K, V> | undefined;

    constructor(
        client: Client,
        protected readonly holds: string
    ) {
        super(client);
    }

    public async getCache(): Promise<CacheLayer<K, V>> {
        if (!this._cache)
            this._cache = await this.cacheFactory.getCacheLayer<K, V>(
                this,
                this.holds,
            );
        return this._cache;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public abstract fromJSON(data: string): V;
}
