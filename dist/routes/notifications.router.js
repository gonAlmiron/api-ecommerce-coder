"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _notifications = require("../controllers/notifications.controller");
var _express = require("express");
var router = (0, _express.Router)();
router.post('/gmail', _notifications.gmailController);
var _default = router;
exports["default"] = _default;