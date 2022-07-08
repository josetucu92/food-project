import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions/actions'


export default function SerachBar() {
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRecipeByName(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" 
                onChange={e => handleChange(e)} 
                placeholder='Search' />
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
