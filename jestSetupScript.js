/* Enzyme Adapter */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

/* Element.closest polyfill */
// if (!Element.prototype.matches)
// Element.prototype.matches = Element.prototype.msMatchesSelector ||
//                             Element.prototype.webkitMatchesSelector;

// if (!Element.prototype.closest)
// Element.prototype.closest = function(s) {
//   var el = this;
//   var ancestor = this;
//   if (!document.documentElement.contains(el)) return null;
//   do {
//       if (ancestor.matches(s)) return ancestor;
//       ancestor = ancestor.parentElement;
//   } while (ancestor !== null);
//   return null;
// };
