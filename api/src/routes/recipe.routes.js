import { Router } from "express";
import { Recipe, Diet } from '../database/db.js';
import { getAllRecipes } from '../controllers/recipe.controllers.js';


const router = Router()

router.get('/', async (req, res, next) => {
    try {
        const getRecipes = await getAllRecipes()
        res.status(200).send(getRecipes)
    } catch (error) {
        next(error)
    }
        
});


router.post('/', async (req, res, next) => {
    try {
        const { name, summary, healthScore, steps } = req.body;
        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps
        })
        res.status(201).send(newRecipe)
    } catch (error) {
        next(error)
    }
});



export default router;