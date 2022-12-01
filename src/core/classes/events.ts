type CustomEventInit<T> = { detail: T } & EventInit;

export class CustomEvent<T> extends Event {
    /** Returns any custom data event was created with. Typically used for synthetic events. */
    public readonly detail: T;

    constructor(type: string, eventInitDict: CustomEventInit<T>) {
        super(type, eventInitDict)
        this.detail = eventInitDict.detail;
    }
}
