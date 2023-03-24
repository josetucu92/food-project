import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllRecipes, getAllDiets } from "../../redux/actions/actions";
import RecipeCard from "../../components/RecipeCard/Card";
import SearchBar from "../../components/SearchBar/SerachBar";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loader/Loading";
import "./Home.css";

export const HomePage = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);

  useEffect(() => {
    //setLoading(true);
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
    //setLoading(false);
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstCountry = indexOfLastRecipe - recipesPerPage;
  const current = allRecipes.slice(indexOfFirstCountry, indexOfLastRecipe);

  return (
    <div className="home-container">
      <div className="wrapper">
        <div className="home-title-container">
          <h2 className="title-home">
            <span className="title-word title-word-1">FOOD </span>
            <span className="title-word title-word-2">PROJECT</span>
          </h2>
        </div>

        <Filters
          setCurrentPage={setCurrentPage}
          getAllRecipes={getAllRecipes}
        />

        <div className="create-wrapper">
          <Link to="/create-recipe">
            <button className="create">Create Recipe</button>
          </Link>
        </div>

        <SearchBar setCurrentPage={setCurrentPage} />
      </div>

      <div className="content-cards">
        {current?.map((el) => {
          return (
            <RecipeCard
              key={el.id}
              name={el.name}
              img={
                el.createdInDb
                  ? "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg"
                  : el.image
              }
              id={el.id}
              Diets={
                el.createdInDb
                  ? el.Diets?.map((r, i) => (
                      <ul key={i}>
                        <li>{r.name}</li>
                      </ul>
                    ))
                  : el.Diets?.map((r, i) => {
                      return (
                        <ul key={i}>
                          <li>{r}</li>
                        </ul>
                      );
                    })
              }
            />
          );
        })}
      </div>

      <Pagination
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
