"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var validateRequest_1 = require("../utils/validateRequest");
var router = (0, express_1.Router)();
exports.authRoutes = router;
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Welcome to the API",
    });
});
router.post("/generateCustomToken", validateRequest_1.validateRequest, authController_1.generateCustomToken);
