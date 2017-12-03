"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_styles_1 = require("core-styles");
var React = require("react");
var typestyle_1 = require("typestyle");
// export class Navbar extends React.Component {
//   public render(): JSX.Element {
//     return (
//       <nav className={classes(navbarClass, flexRowContainerClass, middleChildrenClass)}>
//         {this.props.children}
//       </nav>
//     );
//   }
// }
// tslint:disable-next-line:variable-name
exports.Navbar = function (props) {
    return (React.createElement("nav", { className: typestyle_1.classes(core_styles_1.navbarClass, core_styles_1.flexRowContainerClass, core_styles_1.middleChildrenClass) }, props.children));
};
//# sourceMappingURL=Navbar.js.map