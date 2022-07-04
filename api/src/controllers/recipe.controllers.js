import axios from 'axios';
import { apiKey, apiKey2 } from '../utils/config/index.js';
import { amountRecipes } from '../utils/config/index.js';
import { Recipe, Diet } from '../database/db.js';



const getApiRecipes = async () => {
try {
    const apiRecipesPromise = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey2}&addRecipeInformation=true&number=${amountRecipes}`);
    const apiRecipes = apiRecipesPromise.data?.results.map(el => {
                        return {
                            id: el.id.toString(),
                            name: el.title,
                            image: el.image,
                            diets: el.diets?.map(diet => diet),
                            summary: el.summary,
                            healthScore: el.healthScore,
                            dishTypes: el.dishTypes?.map(dish => dish),
                            steps: el.analyzedInstructions[0]?.steps.map(el => {
                                return {
                                    number: el.number,
                                    steps: el.steps
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


export const getAllAndByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const allRecipes = await getAllRecipes();
        if (name) {
            const filteredRecipes = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
            return res.status(200).send(filteredRecipes);
        } else {
            return res.status(200).send(allRecipes)
        }
    } catch (error) {
        next(error)
    }
};


export const postRecipe = async (req, res, next) => {
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
};

export const getRecipeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const allRecipes = await getAllRecipes(id);

        if(id) {
            const recipeFiltered = allRecipes.filter(recipe => recipe.id === id);
            return res.status(200).send(recipeFiltered)
        } else {
            return res.status(404).send('Recipe not found');
        }
    } catch (error) {
        next(error)
    }
}