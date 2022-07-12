import { Diet } from '../database/db.js';
import { getApiRecipes } from './recipe.controllers.js';

export const getApiDiets = async (req, res, next) => {
    try {
        const apiResponse = await getApiRecipes()
        const mapApiDiets = apiResponse?.map(el => el.Diets)
        const apiDiets = mapApiDiets?.flat(1)
        const uniqueDiet = [...new Set(apiDiets), 'vegetarian']
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