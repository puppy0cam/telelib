export declare const tokenedResultWrapping: <T, R>(callback: (data: T, token?: string | undefined) => R, data: Promise<T>, token?: string | undefined) => Promise<R>;
