import axios from 'axios';
import {GET_ALL_RECIPES,
    GET_ALL_DIETS,
    FILTER_BY_DIET_TYPE,
    GET_RECIPE_BY_NAME,
    SORT_ALPHABETICALLY,
    FILTER_BY_SCORE,
    POST_RECIPE,
    GET_DETAIL,
    CLEAN_RECIPE_DETAIL } from '../constants'

export function getAllRecipes(){
    return function(dispatch){
        axios
            .get('http://localhost:3001/recipes')        
            .then(recipes => dispatch({
                type: GET_ALL_RECIPES,
                payload: recipes.data
            }))
            .catch(err => console.log(err))
    }
};

export function getAllDiets(){
    return function(dispatch){
        axios
            .get('http://localhost:3001/diets')
            .then(diets => 
                dispatch({type: GET_ALL_DIETS, payload: diets.data}))
            .catch(err => console.log(err))
    }
}

export function getRecipeByName(name) {
    return function (dispatch) {
        axios
            .get(`http://localhost:3001/recipes?name=${name}`)
            .then((recipe) =>
            dispatch({ type: GET_RECIPE_BY_NAME, payload: recipe.data})
            )
            .catch(() => alert('Recipe not found'));
    };
}

export function filterAlphabetically(payload){
    return {
        type: SORT_ALPHABETICALLY,
        payload : payload
    }
}

export function filterByDietType(payload){
    return {
        type: FILTER_BY_DIET_TYPE,
        payload
    }
}

export function filterByScore(payload){
    console.log('PAYLOAD', payload)
    return {
        type: FILTER_BY_SCORE,
        payload
    }
}


export function postRecipe(id){
    return function(dispatch){
        axios
            .post('http://localhost:3001/recipes', id)
            .then(recipe => dispatch({
                type: POST_RECIPE,
                payload: recipe.data
            }))
            .catch(err => console.log(err))
    }
}

export function getRecipeDetail(id){
    return function(dispatch){
        axios
            .get(`http://localhost:3001/recipes/${id}`)
            .then(recipe => dispatch({
                type: GET_DETAIL,
                payload: recipe.data}))
            .catch(err => console.log(err))
    }
}

export function cleanRecipeDetail(){
    return {
        type: CLEAN_RECIPE_DETAIL
    }
}