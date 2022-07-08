import React from "react";
import { Link } from 'react-router-dom';


export default function RecipeCard({name, img, diets, id}){

    return (
        <div>
            <Link to={'/home/' + id}>
            <h3>{name}</h3>
            <img src={img} alt="img not found" />
            </Link>
            {diets.map((el, i) => {
                return (
                    <ul key={i}>
                        <li>{el}</li>
                    </ul>
                )
            })}
        </div>
    )
}