import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllDiets } from '../../redux/actions/actions'


export default function CreateRecipe() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    // case user comes directly from landing page
    useEffect(()=> {
        dispatch(getAllDiets())
    }, [dispatch])

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: []
    })

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    };

    const handleDietChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }

    const onClose = (dietDelete) => {
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== dietDelete)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div>
            <h1>Create your own recipe</h1>
            <Link to='/home' >
                <button>Go Back</button>
            </Link>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Recipe name: </label>
                    <input type="text"
                    value={input.name}
                    name = 'name'
                    onChange={e => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Dish summary: </label>
                    <input type="text" 
                    value={input.summary}
                    name = 'summary'
                    onChange={e => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Healthscore: </label>
                    <input type='text' 
                    value={input.healthScore}
                    name='healthScore'
                    onChange={e => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Steps: </label>
                    <input type="text" 
                    value={input.steps}
                    name = 'steps'
                    onChange={e => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Diet Types: </label>
                        <select onChange={e => handleDietChange(e)}>
                            <option hidden value="Recipes">Select here</option>
                            {diets?.map(type => {
                                return <option key={type.id} value={type.name} >
                                    {type.name}
                                        </option>
                            })}
                        </select>
                </div>

                <div>
                        {input.diets.map(diet => {
                            return (
                                <div key={diet}>
                                    <div>
                                    <button onClick={() => onClose(diet)}>X</button>
                                    </div>
                                    <h4>{diet}</h4>
                                </div>
                            )
                        })}
                    </div>

                <button type='submit'>Submit recipe</button>

            </form>
        </div>
    )
}
