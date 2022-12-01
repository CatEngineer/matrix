export default class Util {
    public getTxId(): string {
        return Math.floor((Math.random() * 100)).toString();
    }
}
