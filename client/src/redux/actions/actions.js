import axios from 'axios';

export function getAllRecipes(){
    return function(dispatch){
        axios.get('http://localhost:3001/recipes')
        
            .then(recipes => dispatch({
                type: 'GET_ALL_RECIPES',
                payload: recipes.data
            }))
            .catch(err => console.log(err))
    }
};

export function getRecipeByName(name) {
    return function (dispatch) {
    axios
        .get(`http://localhost:3001/recipes?name=${name}`)
        .then((recipe) =>
        dispatch({ type: "GET_RECIPE_BY_NAME", payload: recipe.data })
        )
        .catch((err) => alert('Recipe not found' + err));
    };
}

export function filterAlphabetically(payload){
    console.log(payload)
    return {
        type: 'SORT_ALPHABETICALLY',
        payload : payload
    }
}