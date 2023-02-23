import { Request, Response } from "express";
import { admin } from "../config/firebase";

export async function sendNotification(req: Request, res: Response) {
  const { message, token } = req.body;

  if (!message || !token) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const payload = {
    notification: {
      title: "My App",
      body: message,
    },
  };

  try {
    const response = await admin.messaging().sendToDevice(token, payload);
    console.log(response);
    return res.status(200).json({ message: "Notification sent" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
