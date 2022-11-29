export default abstract class AsyncCacheLayer<K, V> {
    constructor(protected readonly holds: string) {}
    public abstract get(key: K): Promise<V | undefined>;
    public abstract set(key: K, value: V): Promise<void>;
    public abstract delete(key: K): Promise<void>;
    public abstract clear(): Promise<void>;
    public abstract forEach(callbackfn: (value: V, key: K, map: AsyncCacheLayer<K, V>) => void, thisArgument?: any): Promise<void>;
    public abstract has(key: K): Promise<boolean>;
    public abstract getSize(): Promise<number>;
    public abstract entries(): Promise<IterableIterator<[K, V]>>;
    public abstract keys(): Promise<IterableIterator<K>>;
    public abstract values(): Promise<IterableIterator<V>>;
    public abstract [Symbol.iterator](): Promise<IterableIterator<[K, V]>>;
}
