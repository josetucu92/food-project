import axios from 'axios';
import { apiKey } from '../utils/config/index.js';
import { amountRecipes } from '../utils/config/index.js';
import { Recipe, Diet } from '../database/db.js';



// const getApiInfo = async () => {
//     const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=${amountRecipes}`);
//     // const apiInfoRecipes = apiInfo.data.results.map(el => {
//     //     return {
//     //         id: el.id,
//     //         name: el.title,
//     //         image: el.image,
//     //         diets: el.diets?.map(diet => diet),
//     //         summary: el.summary,
//     //         healthScore: el.healthScore,
//     //         dishTypes: el.dishTypes?.map(dish => dish),
//     //         steps: el.analyzedInstructions[0]?.steps.map(el => {
//     //             return {
//     //                 number: el.number,
//     //                 steps: el.steps
//     //             }
//     //         })
//     //     }
//     // })
//     // return apiInfoRecipes
//     return apiInfo.data.results
// };

// const getDbRecipes = async () => {
//     return await Recipe.findAll({
//         include: {
//             model: Diet,
//             attributes: ['name'],
//             through: {
//                 attributes: []
//             },
//         }
//     })
// };


// export const getAllRecipes = async () => {
//     const apiInfo = await getApiInfo()
//     const dbInfo = await getDbRecipes()
//     const allInfo = apiInfo.concat(dbInfo)
//     return allInfo
// };

export const getAllRecipes = (req, res, next) => {
    try {
        const apiRecipesPromise =  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=${amountRecipes}`);
        
        const dbRecipesPromise =  Recipe.findAll({
                include: {
                    model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
                    },
                    row: true
            }
        });

        Promise.all([apiRecipesPromise, dbRecipesPromise])
            .then(response => {
                const apiRecipes = response[0].data.results.map(el => {
                            return {
                                id: el.id,
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

                const dbRecipes = response[1];

                const allRecipes = [...apiRecipes, ...dbRecipes];

                res.status(200).send(allRecipes)
            })
    } catch (error) {
        next(error)
    }
}