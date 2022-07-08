

const initialState = {
    recipes: [],
    allRecipes: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };


        case 'GET_RECIPE_BY_NAME':
            return{
                ...state,
                recipes: action.payload
            }; 

        case 'SORT_ALPHABETICALLY':
            const statusSorted = action.payload === 'asc' ? 
            state.recipes.sort(function(a, b) {
                console.log(a.name, b.name)
                return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            }) : 
            state.recipes.sort(function(a, b) {
                console.log(a.name, b.name)
                return a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            });
            return{
                ...state,
                recipes: statusSorted
            };

            
    
        default:
            return {
                ...state
            };
    }
}

export default rootReducer