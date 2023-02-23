import { Router } from "express";
import { sendNotification } from "../controllers/notificationController";
import { validateRequest } from "../utils/validateRequest";

const router = Router();

const newLocal = router.post(
  "/sendNotification",
  validateRequest,
  sendNotification
);

export default router;
