import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getRecipeDetail, cleanRecipeDetail } from '../../redux/actions/actions'
import './Details.css'

export default function Details() {
    const details = useSelector(state => state.detail)
    //console.log(details)

    const { id } = useParams()
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(getRecipeDetail(id))
    }, [dispatch, id]);

    // for cleaning my state once component is unmounted
    useEffect(() => {
        return () => {
            dispatch(cleanRecipeDetail())
        }
    }, [dispatch])


    
    return (
        <div className='detail-container'>

            <div className='btn-container'>
                <Link to='/home' >
                    <button>Go Back</button>
                </Link>
            </div>

            {
                details.id ?
                <div className='detail-content'>
                    <h1><u>{details.name}</u></h1>
                    <p><u>Summary</u>: {details.summary?.replace(/<[^>]*>/g, '')}</p>
                    {
                        details.image?.length ?
                        <img src={details.image} alt="not found" /> :
                        <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=2000" alt="sdfsfd" width='312px' height='231px' />
                    }

                    {
                        details.steps?.length ?
                        <p><u>Steps</u>: {JSON.stringify(details.steps)}</p> :
                        <h3>No steps provided for this recipe</h3>
                    }
                    
                <div className="group">    
                    <h3><u>Healthscore</u>: {details.healthScore}</h3>
                    {
                        details.dishTypes?.length ?
                        <h3><u>Dish type</u>: {details.dishTypes}</h3> :
                        <h3>No dish type provided for this recipe</h3>
                    }

                </div>

                <div className='details-diets'>
                    <h3><u>Diets type</u>: </h3>
                    {
                        details.Diets?.map((Diets, index) => <p key={index}>{Diets.name ? Diets.name : Diets}</p>)
                    }
                </div>
                
                </div> :
                <p>NOT FOUND 404</p>
            }

        </div>
    )
}
