
export interface Loadable {
  loading: boolean;
  success: boolean;
  errored: boolean; // critical for actions outside the state to have explicit flag for this
  error: string;
}

export function createDefaultLoadable(): Loadable {
  return {
    loading: false,
    success: false,
    errored: false,
    error: '',
  };
}

export function onLoadableLoad<T extends Loadable>(loadable: T): T {
  return {
    ...(loadable as any),
    loading: true,
    success: false,
    errored: false,
    error: '',
  } as T;
}

export function onLoadableSuccess<T extends Loadable>(loadable: T): T {
  return {
    ...(loadable as any),
    loading: false,
    success: true,
    errored: false,
    error: '',
  } as T;
}

export function onLoadableError<T extends Loadable>(loadable: T, error: string): T {
  return {
    ...(loadable as any),
    loading: false,
    success: false,
    errored: true,
    error
  } as T;
}
