"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultLoadableReducer = exports.withLoadable = void 0;
var loadable_1 = require("./loadable");
function withLoadable(reducer, _a) {
    var loadingActionType = _a.loadingActionType, successActionType = _a.successActionType, errorActionType = _a.errorActionType;
    return function (state, action) {
        if (matchType(loadingActionType, action.type)) {
            state = loadable_1.onLoadableLoad(state);
        }
        if (matchType(successActionType, action.type)) {
            state = loadable_1.onLoadableSuccess(state);
        }
        if (matchType(errorActionType, action.type)) {
            state = loadable_1.onLoadableError(state, action.error);
        }
        return reducer(state, action);
    };
}
exports.withLoadable = withLoadable;
function matchType(actionType, type) {
    return typeof actionType === 'string' ? actionType === type : actionType.indexOf(type) !== -1;
}
function createDefaultLoadableReducer(actionTypes) {
    return withLoadable(function (_) { return _; }, actionTypes);
}
exports.createDefaultLoadableReducer = createDefaultLoadableReducer;
