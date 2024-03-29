import {
    GET_ALL_RECIPES,
    GET_ALL_DIETS,
    FILTER_BY_DIET_TYPE,
    GET_RECIPE_BY_NAME,
    SORT_ALPHABETICALLY,
    FILTER_BY_SCORE,
    POST_RECIPE,
    GET_DETAIL,
    CLEAN_RECIPE_DETAIL } from '../constants'

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail: []
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
            };

        case FILTER_BY_DIET_TYPE:
            const allRecipes = state.allRecipes;
            const filtByDiets = action.payload === 'all' ? 
            allRecipes :
            allRecipes.filter(recipe => {
                return recipe.Diets.find(diet =>  {
                    return diet.name === action.payload || diet === action.payload})
            })
            return {
                ...state,
                recipes: filtByDiets
            };


        case GET_RECIPE_BY_NAME:
            return{
                ...state,
                recipes: action.payload
            }; 

        case SORT_ALPHABETICALLY:
            console.log(state.recipes)
            const statusSorted = action.payload === 'asc' ? 
            state.recipes.sort(function(a, b) {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0
            }) : 
            state.recipes.sort(function(a, b) {
                return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : b.name.toLowerCase() > a.name.toLowerCase() ? 1 : 0
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
            };

        case POST_RECIPE:
            return {
                ...state
            };

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            };

        case CLEAN_RECIPE_DETAIL:
            return{
                ...state,
                detail: []
            };        
    
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;