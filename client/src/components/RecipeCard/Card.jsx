import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css"


export default function RecipeCard({name, img, Diets, id}){
    return (
        <div className="card-container">
            <img className="card-img" src={img} alt="food plate" />
            <h3>{name}</h3>
            <div className="card-diets">
                {Diets}
            </div>
            <div className='btn-container-card'>
                <Link to={'/home/' + id} className='btn-card'>
                    Details
                </Link>
            </div>
        </div>
    )
}