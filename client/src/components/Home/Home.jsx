import React, { useState } from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllRecipes, 
getAllDiets,
} from '../../redux/actions/actions'
import RecipeCard from '../RecipeCard/Card'
import SearchBar from '../SearchBar/SerachBar'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'

export default function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)
    

    useEffect(()=> {
        dispatch(getAllRecipes())
        dispatch(getAllDiets())
    },[dispatch])

    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(2);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstCountry = indexOfLastRecipe - recipesPerPage
    const current = allRecipes.slice(indexOfFirstCountry, indexOfLastRecipe)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    return (
    <div>

        <SearchBar/>
        <Filters/>
        <Link to='/create'>
            <button>Create Recipe</button>
        </Link>




        {current?.map(el => {
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

            <Pagination 
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                pagination={pagination}
            />

    </div>
    )
}
