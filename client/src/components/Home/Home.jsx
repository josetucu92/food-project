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
    //console.log(allRecipes)
    

    useEffect(()=> {
        dispatch(getAllRecipes())
        dispatch(getAllDiets())
    },[dispatch])

    //const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(5);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstCountry = indexOfLastRecipe - recipesPerPage
    const current = allRecipes.slice(indexOfFirstCountry, indexOfLastRecipe)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    return (
    <div>

        <SearchBar setCurrentPage={setCurrentPage} />
        <Filters setCurrentPage={setCurrentPage}/>
        <Link to='/create'>
            <button>Create Recipe</button>
        </Link>




        {current?.map((el, i) => {
                        return (
                                    <RecipeCard 
                                    key={el.id}
                                    name={el.name} 
                                    img={el.createdInDb ? 'https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=312' : el.image} 
                                    id={el.id}
                                    Diets={el.createdInDb ? el.Diets?.map((r, i) => <ul key={i}><li>{r.name}</li></ul>) : el.Diets?.map((r, i) => {
                                        return <ul key={i}><li>{r}</li></ul>
                                    }) }
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
