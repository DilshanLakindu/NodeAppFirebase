"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var validateRequest = function (req, res, next) {
    console.log("middleware", req.body);
    if (!req.body) {
        return res
            .status(400)
            .json({ message: "Invalid request body middlewarew" });
    }
    // If validation succeeds, call the next middleware function
    next();
};
exports.validateRequest = validateRequest;
