"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _chat = require("../controllers/chat.controller");
var router = (0, _express.Router)();
router.post('/save', _chat.saveMessageController);
router.get('/messages', _chat.getMessagesController);
router["delete"]('/messages/:id', _chat.deleteMessageController);
var _default = router;
exports["default"] = _default;