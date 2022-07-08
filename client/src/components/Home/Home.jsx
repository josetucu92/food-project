import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getAllRecipes, filterAlphabetically } from '../../redux/actions/actions'
import RecipeCard from '../RecipeCard/Card'
import SearchBar from '../SearchBar/SerachBar'

export default function Home() {
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    useEffect(()=> {
        dispatch(getAllRecipes())
    },[dispatch])


    const hanldeAlphabetically = (e) => {
        e.preventDefault();
        dispatch(filterAlphabetically(e.target.value))
    }



    return (
    <div>

        <SearchBar/>

        <select onChange={e => hanldeAlphabetically(e)}>
            <option>Filter Alphabetically</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>


        {recipes?.map(el => {
                        return (
                                    <RecipeCard 
                                    key={el.id}
                                    name={el.name} 
                                    img={el.image} 
                                    diets={el.diets}
                                    id={el.id}
                                    />              
                        )
                    })
        }

    </div>
    )
}
