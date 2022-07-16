import React, { useState } from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { 
    getAllRecipes, 
    getAllDiets,
} from '../../redux/actions/actions'
import RecipeCard from '../RecipeCard/Card'
import SearchBar from '../SearchBar/SerachBar'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)
    

    useEffect(()=> {
        dispatch(getAllRecipes())
        dispatch(getAllDiets())
    },[dispatch])


    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstCountry = indexOfLastRecipe - recipesPerPage;
    const current = allRecipes.slice(indexOfFirstCountry, indexOfLastRecipe);

    const handleRefresh = (e) => {
        dispatch(getAllRecipes())
        setCurrentPage(1)
    }


    return (
    <div className='home-container'>
        <div className='wrapper'>
            
            <SearchBar 
                setCurrentPage={setCurrentPage} 
            />

            <Filters 
                setCurrentPage={setCurrentPage}
                getAllRecipes={getAllRecipes}
            />
        

            <div className="home-title-container">
                <h2 className="title-home">
                    <span className="title-word title-word-1">FOOD </span>
                    <span className="title-word title-word-2">PROJECT</span>
                </h2>
            </div>


            <div className='create-wrapper'>
                <Link to='/create-recipe'>
                    <button  className="create">Create Recipe</button>
                </Link>
            </div>

            <button className='btn-refresh' onClick={handleRefresh}>Refresh Recipes</button>
        </div>


        {
        current?.map((el) => {
                        return (
                                    <RecipeCard 
                                    key={el.id}
                                    name={el.name} 
                                    img={el.createdInDb ? 'https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=312' : el.image} 
                                    id={el.id}
                                    Diets={el.createdInDb ? el.Diets?.map((r, i) => <p key={i}>{r.name}</p>) : el.Diets?.map((r, i) => {
                                        return <p key={i}>{r}</p>
                                    }) }
                                    // more={}
                                    />              
                        )
                    })
        }

            <Pagination 
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                setCurrentPage={setCurrentPage}
            />

    </div>
    )
}
