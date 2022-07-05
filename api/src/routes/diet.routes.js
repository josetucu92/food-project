import { Router } from "express";
import { getDiets } from "../controllers/diet.controllers.js";

const router = Router()

router.get('/', getDiets)


export default router;