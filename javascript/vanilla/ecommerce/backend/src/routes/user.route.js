import express from "express";
import { registerUser, signinUser } from "../controller/user.controller.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/signin").post(signinUser);

export const userRoutes = router;
