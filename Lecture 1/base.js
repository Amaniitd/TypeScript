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
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    Base.prototype.clone = function () {
        return __assign({}, this);
    }; // shallow copy
    return Base;
}());
exports["default"] = Base;
