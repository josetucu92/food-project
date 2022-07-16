import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions/actions'
import './SearchBar.css'


export default function SerachBar({setCurrentPage}) {
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRecipeByName(input))
        setInput('')
        setCurrentPage(1)
    }

    return (
        <div   className='searchbar' >
            <form>
                <input 
                type="text" 
                placeholder='Search' 
                value={input}
                onChange={handleChange} 
                />
                
                <button type='submit'
                onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
    )
}
