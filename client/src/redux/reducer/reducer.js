import {GET_ALL_RECIPES,
    GET_ALL_DIETS,
    FILTER_BY_DIET_TYPE,
    GET_RECIPE_BY_NAME,
    SORT_ALPHABETICALLY,
    FILTER_BY_SCORE,
    POST_RECIPE } from '../constants'

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
            
        
        case GET_ALL_DIETS:
            return {
                ...state,
                diets: action.payload
            }

        case FILTER_BY_DIET_TYPE:
            const allRecipes = state.allRecipes;
            const all = action.payload === 'all' ? allRecipes : allRecipes.filter(el => el.diets?.includes(action.payload))
            return {
                ...state,
                recipes: all
            };


        case GET_RECIPE_BY_NAME:
            return{
                ...state,
                recipes: action.payload
            }; 

        case SORT_ALPHABETICALLY:
            const statusSorted = action.payload === 'asc' ? 
            state.recipes.sort(function(a, b) {
                return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            }) : 
            state.recipes.sort(function(a, b) {
                return a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            });
            return{
                ...state,
                recipes: [...statusSorted]
            };

        case FILTER_BY_SCORE:
            
            const scoreSorted = action.payload === 'asc' ? 
            state.recipes.sort(function(a, b) {
                return a.healthScore > b.healthScore ? 1 : b.healthScore > a.healthScore ? -1 : 0
            }) :
            state.recipes.sort(function(a, b) {
                return a.healthScore > b.healthScore ? -1 : b.healthScore > a.healthScore ? 1 : 0
            });
            console.log('scoreSorted', [...scoreSorted])
            return {
                ...state,
                recipes: [...scoreSorted]
            }

        case POST_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }


            
    
        default:
            return {
                ...state
            };
    }
}

export default rootReducer