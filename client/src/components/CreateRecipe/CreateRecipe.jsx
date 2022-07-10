import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllDiets } from '../../redux/actions/actions'
import useForm from './useForm'
import validate from './validate'
import './CreateRecipe.css'


export default function CreateRecipe() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const { handleChange, input, handleSubmit, handleDietChange, onClose, errors, cleanInputs } = useForm(validate)


    // case user comes directly from landing page
    useEffect(()=> {
        dispatch(getAllDiets())
    }, [dispatch])
    

    return (
        <div>
            <h1>Create your own recipe</h1>
            <Link to='/home' >
                <button>Go Back</button>
            </Link>

            <form onSubmit={e => handleSubmit(e)}
            className='form-inputs'>
                
                <div>
                    <label>Name: </label>
                    <input type="text"
                    value={input.name}
                    name = 'name'
                    placeholder='Enter recipe name'
                    onChange={e => handleChange(e)}
                    />
                </div>
                {errors.name && <p>{errors.name}</p>}

                <div>
                    <label>Summary: </label>
                    <input type="text" 
                    value={input.summary}
                    name = 'summary'
                    placeholder='Enter recipe summary'
                    onChange={e => handleChange(e)}
                    />
                </div>
                {errors.summary && <p>{errors.summary}</p>}

                <div>
                    <label>Healthscore: </label>
                    <input type='number' 
                    value={input.healthScore}
                    name='healthScore'
                    placeholder='Enter recipe healthscore'
                    onChange={e => handleChange(e)}
                    />
                </div>
                {errors.healthScore && <p>{errors.healthScore}</p>}

                <div>
                    <label>Steps: </label>
                    <input type="text" 
                    value={input.steps}
                    name = 'steps'
                    placeholder='Enter recipe steps'
                    onChange={e => handleChange(e)}
                    />
                </div>
                {errors.steps && <p>{errors.steps}</p>}

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
                {errors.diets && <p>{errors.diets}</p>}

                <div>
                        {input.diets?.map(diet => {
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

                    <div>
                        {
                            (Object.keys(errors).length === 0 && input.diets?.length > 0 ? 
                            <button type='submit'>Create Recipe</button>
                            : null)
                        }
                        <input type='button' onClick={e => cleanInputs(e)} value='Clean inputs'/>
                    </div>

            </form>
        </div>
    )
};



