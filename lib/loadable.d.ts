export interface Loadable {
    loading: boolean;
    success: boolean;
    errored: boolean;
    error: string;
}
export declare function createDefaultLoadable(): Loadable;
export declare function onLoadableLoad<T extends Loadable>(loadable: T): T;
export declare function onLoadableSuccess<T extends Loadable>(loadable: T): T;
export declare function onLoadableError<T extends Loadable>(loadable: T, error: string): T;
