"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authRoutes_1 = require("./../src/routes/authRoutes");
var notificationRoutes_1 = __importDefault(require("./routes/notificationRoutes"));
var errorHandler_1 = require("./utils/errorHandler");
var app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(errorHandler_1.errorHandler);
// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
    app.get("/", function (req, res) {
        console.log("Server started on porsssst ".concat(port));
    });
    app.use("/auth", authRoutes_1.authRoutes);
    app.use("/noti", notificationRoutes_1.default);
});
