import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    filterAlphabetically,
    filterByDietType,
    filterByScore 
    } from '../../redux/actions/actions'
import './Filters.css'

export default function Filters({setCurrentPage, getAllRecipes}) {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const handleAlphabetically = (e) => {
        dispatch(filterAlphabetically(e.target.value))
        setCurrentPage(1)
    };

    const handleDietFilter = (e) => {
        dispatch(filterByDietType(e.target.value))
        setCurrentPage(1)
    };

    const handleScoreFilter = (e) => {
        dispatch(filterByScore(e.target.value))
        setCurrentPage(1)
    };

    return (
        <div>
        <div className='filters-container'>
            <select onChange={handleAlphabetically}>
                <option>Filter Alphabetically</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>

        <select onChange={handleDietFilter}>
            <option value='all'>Filter by Diet Type</option>
            {diets?.map(type => {
                return <option key={type.id} value={type.name}>{type.name}</option>
            })}
        </select>

        <select onChange={handleScoreFilter}>
            <option>Order by health score</option>
            <option value="asc">Healthiear</option>
            <option value="desc">Less helthier</option>
        </select>
        </div>

        
        </div>
    )
};
