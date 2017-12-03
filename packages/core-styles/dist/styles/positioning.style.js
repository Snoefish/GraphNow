"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
exports.pageMiddle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 'fit-content',
};
exports.pageMiddleClass = tools_1.prefixedStyle(exports.pageMiddle);
exports.pageCenter = {
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'fit-content',
};
exports.pageCenterClass = tools_1.prefixedStyle(exports.pageCenter);
exports.middleChildren = {
    $nest: {
        '&>*': {
            position: 'relative',
            top: 0,
            bottom: 0,
            marginTop: 'auto',
            marginBottom: 'auto',
        },
    },
};
exports.middleChildrenClass = tools_1.prefixedStyle(exports.middleChildren);
exports.centerChildren = {
    $nest: {
        '&>*': {
            position: 'relative',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
};
exports.centerChildrenClass = tools_1.prefixedStyle(exports.centerChildren);
//# sourceMappingURL=positioning.style.js.map