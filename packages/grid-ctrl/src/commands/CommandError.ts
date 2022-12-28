export default class CommandError extends Error {
    constructor(reason: string) {
        super(reason);
    }
}
