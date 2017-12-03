"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
exports.flexRowContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
};
exports.flexRowContainerClass = tools_1.prefixedStyle(exports.flexRowContainer);
exports.flexColumnContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};
exports.flexColumnContainerClass = tools_1.prefixedStyle(exports.flexColumnContainer);
//# sourceMappingURL=flex.style.js.map