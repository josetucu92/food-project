import { Router } from "express";
import { getAllAndByName, 
    postRecipe, 
    getRecipeById } from '../controllers/recipe.controllers.js';


const router = Router()


router.get('/', getAllAndByName);
router.post('/', postRecipe);
router.get('/:id', getRecipeById);



export default router;