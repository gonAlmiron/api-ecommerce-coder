"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _category = require("../controllers/category.controller");
var router = (0, _express.Router)();
router.get('/', _category.getAllController);
router.post('/', _category.saveController);
router.get('/:id', _category.getByIdController);
router["delete"]('/:id', _category.deleteController);
router.put('/:id', _category.updateController);
var _default = router;
exports["default"] = _default;