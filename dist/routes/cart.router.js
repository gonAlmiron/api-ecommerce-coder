"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cart = require("../controllers/cart.controller");
var router = (0, _express.Router)();
router.get('/', _cart.getAllController);
router.post('/', _cart.saveController);
router.get('/:id', _cart.getByIdController);
router["delete"]('/:id', _cart.deleteController);
router.put('/:id', _cart.updateController);
var _default = router;
exports["default"] = _default;