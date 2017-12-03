import { flexRowContainerClass, middleChildrenClass, navbarClass } from 'core-styles';
import * as React from 'react';
import { classes } from 'typestyle';

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
export const Navbar = (props: { children: React.ReactNode }) => {
  return (
    <nav className={classes(navbarClass, flexRowContainerClass, middleChildrenClass)}>
      {props.children}
    </nav>
  );
};
