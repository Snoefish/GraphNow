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
Object.defineProperty(exports, "__esModule", { value: true });
var core_styles_1 = require("core-styles");
var React = require("react");
var typestyle_1 = require("typestyle");
var TabbedNav = /** @class */ (function (_super) {
    __extends(TabbedNav, _super);
    function TabbedNav(props) {
        var _this = _super.call(this, props) || this;
        _this._setActiveTab = function (tabKey) {
            _this.setState({
                activeTabKey: tabKey,
            });
        };
        _this.state = {
            activeTabKey: props.tabs != undefined ? Object.keys(props.tabs)[0] : undefined,
        };
        return _this;
    }
    TabbedNav.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.tabs != undefined && nextProps.tabs !== this.props.tabs) {
            this.setState({
                activeTabKey: Object.keys(nextProps.tabs)[0],
            });
        }
    };
    TabbedNav.prototype.render = function () {
        var _this = this;
        var tabs = this.props.tabs;
        var activeTabKey = this.state.activeTabKey;
        if (tabs != undefined) {
            return (React.createElement("div", { id: 'tab-container' },
                React.createElement("div", { id: 'tab-buttons', className: typestyle_1.classes(core_styles_1.navbarClass, core_styles_1.flexRowContainerClass, core_styles_1.tabNavClass) },
                    this.props.beforeBar != undefined ? React.createElement(this.props.beforeBar, null) : undefined,
                    Object.keys(tabs).map(function (tabKey) { return (React.createElement("button", { key: tabKey, className: tabs[tabKey].label === activeTabKey ? core_styles_1.activeTabClass : undefined, onClick: function () { return _this._setActiveTab(tabKey); } }, tabs[tabKey].label)); }),
                    this.props.afterBar != undefined ? React.createElement(this.props.afterBar, null) : undefined),
                activeTabKey != undefined ? tabs[activeTabKey].component : undefined));
        }
        return null; // tslint:disable-line:no-null-keyword
    };
    return TabbedNav;
}(React.PureComponent));
exports.TabbedNav = TabbedNav;
//# sourceMappingURL=TabbedNav.js.map