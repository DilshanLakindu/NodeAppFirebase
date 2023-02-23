"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var notificationController_1 = require("../controllers/notificationController");
var validateRequest_1 = require("../utils/validateRequest");
var router = (0, express_1.Router)();
var newLocal = router.post("/sendNotification", validateRequest_1.validateRequest, notificationController_1.sendNotification);
exports.default = router;
