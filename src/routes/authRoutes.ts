import { Router } from "express";
import { generateCustomToken } from "../controllers/authController";
import { validateRequest } from "../utils/validateRequest";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

router.post("/generateCustomToken", validateRequest, generateCustomToken);

export { router as authRoutes };
