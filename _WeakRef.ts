declare class WeakRef<T extends object> {
    public constructor(value: T);
    protected readonly [Symbol.toStringTag]: "WeakRef";
    protected ["constructor"]: typeof WeakRef;
    public deref(): T | undefined;
}
declare class FinalizationGroup<T> {
    public constructor(cleanupCallback: (iterator: JSFinalizationGroupCleanupIterator<T>) => void);
    protected ["constructor"]: typeof FinalizationGroup;
    protected readonly [Symbol.toStringTag]: "FinalizationGroup";
    public register(target: object, holdings: T, unregisterToken?: object): undefined;
    public unregister(unregisterToken: object): boolean;
    public cleanupSome(callback?: (iterator: JSFinalizationGroupCleanupIterator<T>) => void): undefined;
}
declare interface JSFinalizationGroupCleanupIterator<T> extends IterableIterator<T> {
    [Symbol.toStringTag]: "FinalizationGroup Cleanup Iterator";
}
