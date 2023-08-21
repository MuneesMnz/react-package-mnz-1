"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _lib = require("./lib");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hello World"), /*#__PURE__*/_react.default.createElement(_lib.TextInput, {
    label: "email",
    placeholder: "Email address",
    type: "email"
  }), /*#__PURE__*/_react.default.createElement(_lib.TextInput, {
    label: "password",
    placeholder: "Password",
    type: "password"
  }));
};
(0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(App, null), document.getElementById("root"));