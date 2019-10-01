declare class WeakRef<T extends object> {
    constructor(value: T);
    protected readonly [Symbol.toStringTag]: "WeakRef";
    protected ["constructor"]: typeof WeakRef;
    deref(): T | undefined;
}
declare class FinalizationGroup<T> {
    constructor(cleanupCallback: (iterator: JSFinalizationGroupCleanupIterator<T>) => void);
    protected ["constructor"]: typeof FinalizationGroup;
    protected readonly [Symbol.toStringTag]: "FinalizationGroup";
    register(target: object, holdings: T, unregisterToken?: object): undefined;
    unregister(unregisterToken: object): boolean;
    cleanupSome(callback?: (iterator: JSFinalizationGroupCleanupIterator<T>) => void): undefined;
}
declare interface JSFinalizationGroupCleanupIterator<T> extends IterableIterator<T> {
    [Symbol.toStringTag]: "FinalizationGroup Cleanup Iterator";
}
