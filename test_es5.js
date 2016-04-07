'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var calcReach = require('boards');
var cities = require('./cities');

var boards = [
  [30.567828, 50.413227,  1.774438, 0.753141],
  [30.467979, 50.449231,  9.614000, 0.511891],
  [30.479726, 50.449231,  9.629906, 0.857260],
  [30.362255, 50.453731,  2.999531, 0.715004],
  [30.368129, 50.453731,  2.865656, 0.870372],
  [30.438611, 50.453731, 10.514563, 0.938558],
  [30.444485, 50.453731, 10.514563, 0.653940],
  [30.450358, 50.453731,  9.629906, 0.861899],
  [30.456232, 50.453731,  9.614000, 0.852882],
  [30.462105, 50.453731,  9.629906, 0.776842],
  [30.374002, 50.458232,  2.999531, 0.877450],
  [30.379876, 50.458232,  5.865188, 0.871876],
  [30.391623, 50.458232,  5.865188, 0.847508],
  [30.397497, 50.458232,  1.667844, 0.899308],
  [30.409244, 50.458232,  6.614688, 0.800080],
  [30.415117, 50.458232,  5.053031, 0.929897],
  [30.420991, 50.458232,  7.669313, 0.849233],
  [30.426864, 50.458232,  5.378938, 0.840257],
  [30.432738, 50.458232,  5.378938, 0.797835],
].map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 4);

  var lat = _ref2[0];
  var lon = _ref2[1];
  var grp = _ref2[2];
  var visibility = _ref2[3];
  return { lat: lat, lon: lon, grp: grp, visibility: visibility };
});

var reach = calcReach(boards, cities.Kiev);
var formattedOut = reach.map(function (line) {
  return line.map(function (d) {
    return d.toFixed(6);
  }).join('\t');
}).join('\n');
console.log(formattedOut + '\n');

