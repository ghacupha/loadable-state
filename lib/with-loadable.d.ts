import { Loadable } from './loadable';
import { ActionTypes } from "./action-types";
import { Action } from "./action";
import { ReducerFunction } from "./reducer-function";
export declare function withLoadable<T extends Loadable, U extends Action = Action>(reducer: ReducerFunction<T, U>, { loadingActionType, successActionType, errorActionType }: ActionTypes): ReducerFunction<T, U>;
export declare function createDefaultLoadableReducer<T extends Loadable, U extends Action = Action>(actionTypes: ActionTypes): ReducerFunction<T, U>;
