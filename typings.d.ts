declare module 'without-props' {
    const content: <T>(obj: T, keys: Array<keyof T>) => Partial<T>;
    export default content;
}
