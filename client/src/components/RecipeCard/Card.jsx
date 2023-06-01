import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const RecipeCard = ({ name, img, diets = [], id }) =>
  console.log(diets) || (
    <div className="card-container">
      <img className="card-img" src={img} alt="food plate" />
      <h3>{name}</h3>
      <div className="diets-container">
        {diets &&
          diets.map((el) => <span style={{ width: "120px" }}>{el}</span>)}
      </div>
      <div className="btn-container-card">
        <Link to={"/home/" + id} className="btn-card">
          Details
        </Link>
      </div>
    </div>
  );
