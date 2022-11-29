import type Entity from "../../entity.js";
import type Manager from "../../manager.js";

export default abstract class CacheLayer<K, V extends Entity<any>> {
    constructor(protected readonly manager: Manager<K, V>, protected readonly holds: string) {}
    public abstract get(key: K): V | undefined;
    public abstract set(key: K, value: V): this;
    public abstract delete(key: K): boolean;
    public abstract clear(): void;
    public abstract forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArgument?: any): void;
    public abstract has(key: K): boolean;
    public abstract getSize(): number;
    public abstract entries(): IterableIterator<[K, V]>;
    public abstract keys(): IterableIterator<K>;
    public abstract values(): IterableIterator<V>;
    public abstract [Symbol.iterator](): IterableIterator<[K, V]>;
}
