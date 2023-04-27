"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryCollection = exports.CategoryModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var categoryCollection = 'category';
exports.categoryCollection = categoryCollection;
var categorySchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
var CategoryModel = _mongoose["default"].model(categoryCollection, categorySchema);
exports.CategoryModel = CategoryModel;