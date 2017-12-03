"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
typestyle_1.cssRaw("\n  .ripple {\n    position: relative;\n    overflow: hidden;\n    transform: translate3d(0, 0, 0);\n  }\n  .ripple:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10, 10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n  .ripple:active:after {\n    transform: scale(0, 0);\n    opacity: .2;\n    transition: 0s;\n  }\n");
exports.rippleClass = 'ripple';
//# sourceMappingURL=ripple.style.js.map