import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css"


export default function RecipeCard({name, img, Diets, id}){
    return (
        <div className="main">
        <div className="card-container">
            <div className="card-content">
                    <img className="card-img" src={img} alt="food plate" />
                    <h3 className="diets-title">{name}</h3>
                <div className="card-diets">
                    {Diets}
                </div>
                <Link to={'/home/' + id} className='btn-card'>
                    Details
                </Link>
            </div>
        </div>
        </div>
    )
}