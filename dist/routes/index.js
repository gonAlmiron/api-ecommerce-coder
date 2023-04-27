"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = _interopRequireDefault(require("./users.router"));
var _notifications = _interopRequireDefault(require("./notifications.router"));
var _products = _interopRequireDefault(require("./products.router"));
var _chat = _interopRequireDefault(require("./chat.router"));
var _category = _interopRequireDefault(require("./category.router"));
var _cart = _interopRequireDefault(require("./cart.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json({
    message: "Petición desde el SERVIDOR -> ROUTER"
  });
});
router.use('/auth', _users["default"]);
router.use('/notifications', _notifications["default"]);
router.use('/products', _products["default"]);
router.use('/chat', _chat["default"]);
router.use('/categories', _category["default"]);
router.use('/cart', _cart["default"]);
var _default = router;
exports["default"] = _default;