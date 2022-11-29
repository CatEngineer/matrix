export default class Util {
    /** @internal */
    public getTxId(): string {
        return Math.floor((Math.random() * 100)).toString();
    }
}
