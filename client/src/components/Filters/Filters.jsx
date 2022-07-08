import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterAlphabetically,
    filterByDiet } from '../../redux/actions/actions'

export default function Filters() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const hanldeAlphabetically = (e) => {
        e.preventDefault();
        dispatch(filterAlphabetically(e.target.value))
    }

    const handleDietFilter = (e) => {
        e.preventDefault();
        dispatch(filterByDiet(e.target.value))
    }

    return (
        <div>
            <select onChange={e => hanldeAlphabetically(e)}>
            <option>Filter Alphabetically</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>

        <select onChange={e => handleDietFilter(e)}>
            <option value='all'>Filter by Diet Type</option>
            {diets?.map(type => {
                return <option key={type.id} value={type.name}>{type.name}</option>
            })}
        </select>

        <select>
            <option value="all">Order by health score</option>
            <option value="asc">Healthiear</option>
            <option value="desc">Less helthier</option>
        </select>
        </div>
    )
}
