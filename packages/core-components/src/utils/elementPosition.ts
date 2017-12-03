
export interface IPosition {
  top: number;
  bottom: number;
  left: number;
  right: number;
  height: number;
  width: number;
}

/**
 * Get an HTML elements position on the page
 *
 * @export
 * @param {Element} node HTML element to calculate
 * @returns {IPosition} Position object
 */
export function elementPosition(node: Element): IPosition {
  const elPos = node.getBoundingClientRect();

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: elPos.top + scrollTop,
    left: elPos.left + scrollLeft,
    width: elPos.width,
    bottom: elPos.bottom + scrollTop,
    height: elPos.height,
    right: elPos.right + scrollLeft,
  };
}
