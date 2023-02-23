import { Request, Response, NextFunction } from "express";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("middleware", req.body);

  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Invalid request body middlewarew" });
  }

  // If validation succeeds, call the next middleware function
  next();
};
