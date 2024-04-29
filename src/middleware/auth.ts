import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extending the Express Request interface to include userId
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

// Middleware function to verify JWT token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    // Extract and add userId to the request object
    req.userId = (decoded as JwtPayload).userId;
    // Call the next middleware
    next();
  } catch (error) {
    // If verification fails, send unauthorized response
    return res.status(401).json({ message: "unauthorized" });
  }
};

export default verifyToken;
