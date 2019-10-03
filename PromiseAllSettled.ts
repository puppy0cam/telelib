interface SettledPromiseRejection {
    status: "rejected";
    reason: any;
}
interface SettledPromiseFulfilled<T> {
    status: "fulfilled";
    value: T;
}
type SettledPromise<T> = SettledPromiseFulfilled<T> | SettledPromiseRejection;
declare function allSettledFunction<T1>(promises: [T1 | PromiseLike<T1>]): Promise<[SettledPromise<T1>]>;
declare function allSettledFunction<T1, T2>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[SettledPromise<T1>, SettledPromise<T2>]>;
declare function allSettledFunction<T1, T2, T3>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>]>;
declare function allSettledFunction<T1, T2, T3, T4>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5, T6>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>, SettledPromise<T6>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5, T6, T7>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>, SettledPromise<T6>, SettledPromise<T7>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5, T6, T7, T8>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>, SettledPromise<T6>, SettledPromise<T7>, SettledPromise<T8>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5, T6, T7, T8, T9>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>, SettledPromise<T6>, SettledPromise<T7>, SettledPromise<T8>, SettledPromise<T9>]>;
declare function allSettledFunction<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(promises: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[SettledPromise<T1>, SettledPromise<T2>, SettledPromise<T3>, SettledPromise<T4>, SettledPromise<T5>, SettledPromise<T6>, SettledPromise<T7>, SettledPromise<T8>, SettledPromise<T9>, SettledPromise<T10>]>;
declare function allSettledFunction<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<SettledPromise<TAll>>;
export const allSettled: typeof allSettledFunction = (Promise as any).allSettled;
