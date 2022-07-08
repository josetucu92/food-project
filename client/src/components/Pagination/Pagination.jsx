import React from 'react';


export default function Pagination({recipesPerPage, allRecipes, pagination}){
    const pageNumber = [];
    

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage) ; i++){
        pageNumber.push(i)        
    };

    return (
        <div>
            <div  className='pagination'>
                {pageNumber?.map((number) => (
                    <button key={number} className='a' onClick={() => pagination(number)}>{number}</button>
                ))}
            </div>
        </div>
    );

}