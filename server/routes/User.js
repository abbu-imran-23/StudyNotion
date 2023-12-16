import express from "express";
import { sendotp, signup, login } from "../controllers/Auth.js";
// import { auth } from "../middlewares/Auth.js";

const router = express.Router();

// ********************************************************************************************************
//                                      Authentication Routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
// router.post("/changepassword", auth, changePassword)

// Export the router for use in the main application
export default router;