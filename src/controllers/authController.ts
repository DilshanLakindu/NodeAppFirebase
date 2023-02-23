import { Request, Response } from "express";
import { admin } from "../config/firebase";
import { User } from "../models/user";

export async function generateCustomToken(req: Request, res: Response) {
  const { uid, email, displayName } = req.body;
  console.log(uid, email, displayName);

  if (!uid || !email || !displayName) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const user: User = { uid, email, displayName };

  try {
    const customToken = await admin.auth().createCustomToken(user.uid);

    return res.status(200).json({ customToken: "Token Generated" });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
