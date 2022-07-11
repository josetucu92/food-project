import React from "react";
import { Link } from 'react-router-dom';


export default function RecipeCard({name, img, Diets, id}){
    console.log(Diets)
    return (
        <div>
            <Link to={'/home/' + id}>
            <h3>{name}</h3>
            <img src={img} alt="img not found" />
            </Link>
            {Diets}
        </div>
    )
}