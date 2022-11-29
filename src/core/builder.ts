import type Client from "./client.js";
import type Entity from "./entity.js";
import type Manager from "./manager.js";

/**
 * @internal
 */
export default abstract class Builder<M extends Manager<any, any>, V>  {
    protected constructor(
        protected readonly client: Client,
        protected readonly manager: M,
    ) {}

    public abstract build(from: V): Promise<Entity<M>>;
}
