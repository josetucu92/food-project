import { Router } from "express";
import recipeRoutes from './recipe.routes.js';
import dietRoutes from './diet.routes.js';

const router = Router()

router.use('/recipes', recipeRoutes);
router.use('/diets', dietRoutes);


export default router;