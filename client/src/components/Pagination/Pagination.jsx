import React from 'react';
import './Pagination.css';

export default function Pagination({recipesPerPage, allRecipes, setCurrentPage }){
    const pageNumber = [];

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage) ; i++){
        pageNumber.push(i)        
    };

    return (
        <div className='center'>
            <div className='pagination'>
                {pageNumber?.map((number) => (
                    <button key={number} className='a' onClick={() => pagination(number)}>{number}</button>
                ))}
            </div>
        </div>
    );

}