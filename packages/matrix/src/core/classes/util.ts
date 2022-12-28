import showdown from 'showdown';

export default class Util {
    private readonly mdConv: showdown.Converter = new showdown.Converter();

    public getTxId(): string {
        return Math.floor((Math.random() * 100)).toString();
    }

    public mdToHtml(md: string): string {
        return this.mdConv.makeHtml(md);
    }

    public each<T>(record: Record<string, T> | undefined, callback: (value: T, key: string) => void): void {
        if (!record) return;

        const keys = Object.keys(record);
        for (const key of keys) {
            const value = record[key];
            if (value) callback(value, key);
        }
    }

    public isUserId(value: string): boolean {
        return /^@.+:\w+\.\w+$/.test(value);
    }

    public isRoomId(value: string): boolean {
        return /^(!|#).+:\w+\.\w+$/.test(value);
    }

    public isEventId(value: string): boolean {
        return /^\$[\w-]+=\w+\.\w+$/.test(value);
    }
}
