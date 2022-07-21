import { Router } from "express";
import { getAllAndByName, 
    postRecipe, 
    getRecipeById } from '../controllers/recipe.controllers.js';
import { Recipe } from "../database/db.js";



const router = Router()


router.get('/', getAllAndByName);
router.post('/', postRecipe);
router.get('/:id', getRecipeById);
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params

    await Recipe.destroy({
            where: { id }
        })
        res.send(id)
        
})



export default router;