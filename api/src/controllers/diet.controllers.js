import axios from 'axios';
import { apiKey, apiKey2 } from '../utils/index.js';
import { amountRecipes } from '../utils/index.js';
import { Diet } from '../database/db.js';

export const getApiDiets = async (req, res, next) => {
    try {
        const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey2}&addRecipeInformation=true&number=${amountRecipes}`)
        const mapApiDiets = apiResponse.data.results.map(el => el.diets)
        const apiDiets = mapApiDiets.flat(2)
        const uniqueDiet = [...new Set(apiDiets)]
        uniqueDiet.forEach(async (el) => {
            await Diet.findOrCreate({
                where: { name: el}
            })
        })
        const dietsDB = await Diet.findAll()
        return res.status(200).send(dietsDB)
    } catch(error) {
        next(error)
    }
};