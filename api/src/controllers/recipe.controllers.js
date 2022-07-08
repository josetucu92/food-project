import axios from 'axios';
import { apiKey, apiKey2 } from '../utils/index.js';
import { amountRecipes } from '../utils/index.js';
import { Recipe, Diet } from '../database/db.js';


const getApiRecipes = async () => {
try {
    const apiRecipesPromise = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=${amountRecipes}`);
    const apiRecipes = apiRecipesPromise.data?.results.map(el => {
        return {
                            id: el.id.toString(),
                            name: el.title,
                            image: el.image,
                            diets: el.diets
                            ?.map(diet => diet)
                            ,
                            summary: el.summary,
                            healthScore: el.healthScore,
                            dishTypes: el.dishTypes?.map(dish => dish),
                            steps: el.analyzedInstructions[0]?.steps.map(e => {
                                return {
                                    number: e.number,
                                    steps: e.steps
                                }
                            })
                        }
                    })
    return apiRecipes;
} catch(error) {
    console.error(error)
}
};

const dbRecipesPromise = async () => {
    try {
        const dbRecipes = await Recipe.findAll({
            include: {
                model: Diet,
        attributes: ['name'],
        through: {
            attributes: []
                },
                row: true
        }
        });
        return dbRecipes;
    } catch (error) {
        console.error(error)
    }
};

const getAllRecipes = async () => {
    try {
        const apiRecipes = await getApiRecipes();
        const dbRecipes = await dbRecipesPromise();
        const allRecipes = [...apiRecipes, ...dbRecipes];
        return allRecipes;
    } catch (error) {
        console.error(error)
    }
}

// --------------------->Routes<---------------------

export const getAllAndByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const allRecipes = await getAllRecipes();
        if (name) {
            const filteredRecipes = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
            filteredRecipes.length ? 
            res.status(200).send(filteredRecipes) :
            res.status(404).send('No recipes found with that name');
        } else {
            return res.status(200).send(allRecipes)
        }
    } catch (error) {
        next(error)
    }
};


export const getRecipeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allRecipes = await getAllRecipes(id);
        if(id) {
            const recipeFiltered = allRecipes.filter(recipe => recipe.id === id);
            recipeFiltered.length ? 
            res.status(200).send(recipeFiltered) :
            res.status(404).send('No recipes found with that ID');
        }
    } catch (error) {
        next(error)
    }
}


export const postRecipe = async (req, res, next) => {
    try {
        const { name, summary, healthScore, steps, diets } = req.body;
        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
            diets
        })
        const findAllDiets = await Diet.findAll({
            where: { name: diets }
        })
        await newRecipe.addDiet(findAllDiets)

        return res.status(200).send(newRecipe)
    } catch (error) {
        next(error)
    }
};