"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get an HTML elements position on the page
 *
 * @export
 * @param {Element} node HTML element to calculate
 * @returns {IPosition} Position object
 */
function elementPosition(node) {
    var elPos = node.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: elPos.top + scrollTop,
        left: elPos.left + scrollLeft,
        width: elPos.width,
        bottom: elPos.bottom + scrollTop,
        height: elPos.height,
        right: elPos.right + scrollLeft,
    };
}
exports.elementPosition = elementPosition;
//# sourceMappingURL=elementPosition.js.map