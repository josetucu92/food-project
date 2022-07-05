import axios from 'axios';
import { apiKey, apiKey2 } from '../utils/index.js';
import { amountRecipes } from '../utils/index.js';
import { Diet } from '../database/db.js';

const getApiDiets = async () => {
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
    } catch(error) {
        console.error(error)
    }
};

export const getDiets = async (req, res, next) => {
    try {
        await getApiDiets()
        const dietsDB = await Diet.findAll()
        res.send(dietsDB)
    } catch (error) {
        console.log(error)
    }
}