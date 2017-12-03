"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var Prefixer = require("inline-style-prefixer");
var typestyle_1 = require("typestyle");
var prefixer = new Prefixer();
function prefix(props) {
    var $nest = props.$nest, rest = __rest(props, ["$nest"]);
    var prefixedProps = prefixer.prefix(__assign({}, rest));
    var nested = Object.keys($nest || {}).reduce(function (reducedObj, selector) {
        return (__assign({}, reducedObj, (_a = {}, _a[selector] = prefix($nest[selector]), _a)));
        var _a;
    }, {});
    return __assign({}, prefixedProps, { $nest: nested });
}
exports.prefix = prefix;
function prefixedStyle(props) {
    // const prefixedProps = prefix(props);
    return typestyle_1.style(props);
}
exports.prefixedStyle = prefixedStyle;
//# sourceMappingURL=prefixedStyle.js.map