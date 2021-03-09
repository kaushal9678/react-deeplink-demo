"use strict";

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'build', 'index.html'));
});