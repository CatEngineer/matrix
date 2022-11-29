import type Entity from "./entity.js";
import type Manager from "./manager.js";

/**
 * @internal
 */
export default abstract class Builder<V, T extends Entity<any>>  {
    protected constructor(
        protected readonly manager: Manager<any, any>,
    ) {}

    public abstract build(from: V): Promise<T>;
}
