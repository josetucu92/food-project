import { Router } from "express";
import recipeRoutes from './recipe.routes.js';
import dietRoutes from './diet.routes.js';

const router = Router()

router.use('/recipe', recipeRoutes);
router.use('/diet', dietRoutes);


export default router;