
import jwt from "jsonwebtoken";
import User from "../modules/users/user.model.js";

export async function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.civicvoice_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please log in first.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.sub);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User account not found.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Your session is invalid or expired. Please log in again.",
      });
    }

    next(error);
  }
}
