

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
            
        
        case 'GET_ALL_DIETS':
            return {
                ...state,
                diets: action.payload
            }

        case 'FILTER_BY_DIET_TYPE':
            const allRecipes = state.allRecipes;
            const all = action.payload === 'all' ? allRecipes : allRecipes.filter(el => el.diets?.includes(action.payload))
            return {
                ...state,
                recipes: all
            };


            case 'GET_RECIPE_BY_NAME':
                return{
                    ...state,
                    recipes: action.payload
                }; 

        case 'SORT_ALPHABETICALLY':
            let orden = action.payload === "asc"
            ? state.recipes.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
            : state.recipes.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })

        return {
            ...state,
            recipes: [...orden]
        }


            
    
        default:
            return {
                ...state
            };
    }
}

export default rootReducer