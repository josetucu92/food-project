import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getRecipeDetail } from '../../redux/actions/actions'

export default function Details() {
    const details = useSelector(state => state.detail)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getRecipeDetail(id))
    }, [dispatch, id]);


    
    return (
        <div>

            <div>
                <Link to='/home' >
                    <button>Go Back</button>
                </Link>
            </div>

            {
                details ?
                <div>
                    <h1>{details[0].name}</h1>
                    <img src={details[0].image} alt="not found" />
                    <h3>{details[0].dishTypes}</h3>
                    <ul><li>{details[0].diets}</li></ul>
                    {/* <div> dangerouslySetInnerHTML= {__html: details[0].summary}</div> */}
                    <h3>{details[0].healthScore}</h3>
                    {/* <h3>{details[0].steps}</h3> */}
                </div> :
                <p>Loading...</p>
            }

        </div>
    )
}
