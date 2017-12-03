"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var onElementResize = require("element-resize-event"); // tslint:disable-line:no-require-imports
var lodash_es_1 = require("lodash-es"); // tslint:disable-line:no-require-imports
var React = require("react");
function defaultGetDimensions(element) {
    return [element.clientWidth, element.clientHeight];
}
/**
 *
 *
 * @export
 * @param {{
 *     getDimensions: (element: HTMLElement) => [number, number];
 *     debounce: number;
 *     debounceOpts: _.DebounceSettings;
 *     elementResize: boolean;
 *   }} [options={
 *     getDimensions: defaultGetDimensions,
 *     debounce: 0,
 *     debounceOpts: {},
 *     elementResize: true,
 *   }]
 * @returns
 */
function configureDimensionsHOC(options) {
    if (options === void 0) { options = {
        getDimensions: defaultGetDimensions,
        debounce: 0,
        debounceOpts: {},
        elementResize: true,
    }; }
    return function createDimensionsHOC(ComposedComponent) {
        return /** @class */ (function (_super) {
            __extends(DimensionsHOC, _super);
            function DimensionsHOC(props) {
                var _this = _super.call(this, props) || this;
                // Immediate updateDimensions callback with no debounce
                _this._updateDimensionsImmediate = function () {
                    if (_this._wrapper != undefined) {
                        var dimensions = options.getDimensions(_this._wrapper);
                        if (dimensions[0] !== _this.state.containerWidth || dimensions[1] !== _this.state.containerHeight) {
                            _this.setState({
                                containerWidth: dimensions[0],
                                containerHeight: dimensions[1],
                            });
                        }
                    }
                };
                // Optionally-debounced updateDimensions callback
                _this._updateDimensions = options.debounce === 0
                    ? _this._updateDimensionsImmediate // tslint:disable-line:member-ordering
                    : lodash_es_1.debounce(_this._updateDimensionsImmediate, options.debounce, options.debounceOpts);
                _this._onResize = function () {
                    if (_this._animationFrameId != undefined)
                        return;
                    _this._animationFrameId = _this._getWindow().requestAnimationFrame(function () {
                        _this._animationFrameId = undefined;
                        _this._updateDimensions();
                    });
                };
                _this.state = {
                    containerWidth: undefined,
                    containerHeight: undefined,
                };
                return _this;
            }
            DimensionsHOC.prototype.componentDidMount = function () {
                if (this._wrapper == undefined) {
                    throw new Error('Cannot find wrapper div');
                }
                this._updateDimensionsImmediate();
                if (options.elementResize) {
                    // Experimental: `element-resize-event` fires when an element resizes.
                    // It attaches its own window resize listener and also uses requestAnimationFrame, so we can just call `this.updateDimensions`.
                    onElementResize(this._wrapper, this._updateDimensions);
                }
                else {
                    this._getWindow().addEventListener('resize', this._onResize, false);
                }
            };
            DimensionsHOC.prototype.componentWillUnmount = function () {
                this._getWindow().removeEventListener('resize', this._onResize);
            };
            /**
             * Returns the underlying wrapped component instance.
             * Useful if you need to access a method or property of the component
             * passed to react-dimensions.
             *
             * @return {object} The rendered React component
             */
            DimensionsHOC.prototype.getWrappedInstance = function () {
                return this._wrappedInstance;
            };
            DimensionsHOC.prototype.render = function () {
                var _this = this;
                var _a = this.state, containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
                if (this._wrapper != undefined && containerWidth == undefined && containerHeight == undefined) {
                    // tslint:disable-next-line:no-console
                    console.warn('Wrapper div has no height or width, try overriding style with `containerStyle` option');
                }
                var wrapperStyle = {
                    height: 'fit-content',
                    width: '100%',
                    padding: 0,
                    border: 0,
                };
                return (React.createElement("div", { id: 'dimensioning-div', style: wrapperStyle, ref: function (ref) {
                        _this._wrapper = ref;
                    } }, (containerWidth || containerHeight) ?
                    React.createElement(ComposedComponent, __assign({}, this.state, this.props, { ref: function (ref) { return _this._wrappedInstance = ref; } })) : undefined));
            };
            DimensionsHOC.prototype._getWindow = function () {
                return this.refs.container != undefined && this.refs.container.ownerDocument != undefined
                    ? this.refs.container.ownerDocument.defaultView || window
                    : window;
            };
            return DimensionsHOC;
        }(React.Component));
    };
}
exports.configureDimensionsHOC = configureDimensionsHOC;
//# sourceMappingURL=DimensionsHOC.js.map