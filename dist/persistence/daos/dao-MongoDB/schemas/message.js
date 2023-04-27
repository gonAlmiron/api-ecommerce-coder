"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSchema = exports.MessageModel = void 0;
var _mongoose = require("mongoose");
var MessageSchema = new _mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
exports.MessageSchema = MessageSchema;
var MessageModel = (0, _mongoose.model)('message', MessageSchema);
exports.MessageModel = MessageModel;