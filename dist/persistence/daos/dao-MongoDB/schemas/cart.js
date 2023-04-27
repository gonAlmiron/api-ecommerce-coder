"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSchema = exports.MessageModel = void 0;
var _mongoose = require("mongoose");
var MessageSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  items: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
exports.MessageSchema = MessageSchema;
var MessageModel = (0, _mongoose.model)('cart', MessageSchema);
exports.MessageModel = MessageModel;