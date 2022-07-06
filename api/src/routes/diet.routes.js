import { Router } from "express";
import { getApiDiets } from "../controllers/diet.controllers.js";

const router = Router()

router.get('/', getApiDiets)


export default router;