"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onLoadableError = exports.onLoadableSuccess = exports.onLoadableLoad = exports.createDefaultLoadable = void 0;
function createDefaultLoadable() {
    return {
        loading: false,
        success: false,
        error: null,
    };
}
exports.createDefaultLoadable = createDefaultLoadable;
function onLoadableLoad(loadable) {
    return __assign(__assign({}, loadable), { loading: true, success: false, error: null });
}
exports.onLoadableLoad = onLoadableLoad;
function onLoadableSuccess(loadable) {
    return __assign(__assign({}, loadable), { loading: false, success: true, error: null });
}
exports.onLoadableSuccess = onLoadableSuccess;
function onLoadableError(loadable, error) {
    return __assign(__assign({}, loadable), { loading: false, success: false, error: error });
}
exports.onLoadableError = onLoadableError;
