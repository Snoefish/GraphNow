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
export declare function elementPosition(node: Element): IPosition;
