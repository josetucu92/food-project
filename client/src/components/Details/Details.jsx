import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getRecipeDetail, cleanRecipeDetail } from '../../redux/actions/actions'

export default function Details() {
    const details = useSelector(state => state.detail)
    console.log(details)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getRecipeDetail(id))
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch(cleanRecipeDetail())
        }
    }, [dispatch])


    
    return (
        <div>

            <div>
                <Link to='/home' >
                    <button>Go Back</button>
                </Link>
            </div>

            {
                details.id ?
                <div>
                    <h1>{details.name}</h1>
                    {
                        details.image?.length ?
                        <img src={details.image} alt="not found" /> :
                        <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=2000" alt="sdfsfd" width='312px' height='231px' />
                    }
                    {
                        details.dishTypes?.length ?
                        <h3>Dish type: {details.dishTypes}</h3> :
                        <h3>No dish type provided for this recipe</h3>
                    }
                    
                        

                    <h3>Diets type: </h3>
                    {
                        details.Diets?.map((Diets, index) => <p key={index}>{Diets.name ? Diets.name : Diets}</p>)
                    }



                    <p>Summary: {details.summary?.replace(/<[^>]*>/g, '')}</p>
                    <h3>Healthscore: {details.healthScore}</h3>
                    {
                        details.steps?.length ?
                        <h3>Steps: {JSON.stringify(details.steps)}</h3> :
                        <h3>No steps provided for this recipe</h3>
                    }
                </div> :
                <p>NOT FOUND 404</p>
            }

        </div>
    )
}
