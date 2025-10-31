import { Router } from "express";
import { AuthControllers } from "./auth.controller";

const router = Router();
router.post("/login",AuthControllers.credentialsLogic)
export const AuthRoutes = router;
