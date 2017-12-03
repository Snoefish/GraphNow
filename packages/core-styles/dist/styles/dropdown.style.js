"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
exports.dropdown = {
    width: 'fit-content',
    $nest: {
        button: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        div: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
        },
    },
};
exports.dropdownClass = tools_1.prefixedStyle(exports.dropdown);
//# sourceMappingURL=dropdown.style.js.map