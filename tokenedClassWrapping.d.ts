export declare const tokenedClassWrapping: <T, R>(callback: new (data: T, token?: string | undefined) => R, data: Promise<T>, token?: string | undefined) => Promise<R>;
