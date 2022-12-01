import Base from "./base.js";
import type Manager from "./manager.js";

export default abstract class Entity<T extends Manager<any, any>> extends Base {
    constructor(
        public readonly manager: T, 
        public readonly id: string,
    ) {
        super(manager.client);
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public abstract toJSON(): any;
}
