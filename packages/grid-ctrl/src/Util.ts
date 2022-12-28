export default class Util {
    public static castBool(value: string): boolean | undefined {
        const truthy = ['true', 'yes', '1'];
        const falsy = ['false', 'no', '0'];
        const bool = value.toLowerCase();
        if (truthy.includes(bool)) return true;
        if (falsy.includes(bool)) return false;
    }
}
