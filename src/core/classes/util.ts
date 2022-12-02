import showdown from 'showdown';

export default class Util {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    private readonly mdConv: showdown.Converter = new showdown.Converter();

    public getTxId(): string {
        return Math.floor((Math.random() * 100)).toString();
    }

    public mdToHtml(md: string): string {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
        return this.mdConv.makeHtml(md);
    }

}
