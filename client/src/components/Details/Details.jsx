import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRecipeDetail,
  cleanRecipeDetail,
} from "../../redux/actions/actions";
import Loading from "../Loader/Loading";
import GoBackBtn from "../GoBack/GoBack";
import "./Details.css";

export default function Details() {
  const details = useSelector((state) => state.detail);
  console.log(details);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch, id]);

  // for cleaning my state once component is unmounted
  useEffect(() => {
    return () => {
      dispatch(cleanRecipeDetail());
    };
  }, [dispatch]);

  return (
    <div className="detail-container">
      <GoBackBtn />

      {details.id ? (
        <div>
          <h1>
            <u>{details.name}</u>
          </h1>

          <div className="summary">
            <p>{details.summary?.replace(/<[^>]*>/g, "")}</p>
          </div>

          <div className="center-detail-content">
            <div className="group">
              <div className="healthscore-dish-detail">

                <div className="healthscore-detail">
                <h3>
                  <u>Healthscore</u>: {details.healthScore}
                </h3>
                </div>


                {details.dishTypes?.length ? (
                <div className="dish-type-detail">
                  <h3>
                    <u>Dish type</u>: {details.dishTypes}
                  </h3>
                </div>
              ) : (
                <div className="dish-type-detail">
                  <h3>No dish type provided for this recipe</h3>
                </div>
              )}

              </div>

              

              {details.image?.length ? (
                <img src={details.image} alt="not found" />
              ) : (
                <img
                  src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=2000"
                  alt="sdfsfd"
                  width="312px"
                  height="231px"
                />
              )}

              <div className="details-diets">
                <h3>
                  <u>Diets type</u>:{" "}
                </h3>
                {details.Diets?.map((Diets, index) => (
                  <p key={index}>{Diets.name ? Diets.name : Diets}</p>
                ))}
              </div>
            </div>

            <div className="steps-wrapper">
              {details.steps?.length ? (
                <div className="steps-details-div">
                  {details.steps?.map((step, i) => {
                    return (
                      <div key={i}>
                        <p className="steps-div2">
                          Step {++i}: {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <h3>No steps provided for this recipe</h3>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading className="loading-details" />
      )}
    </div>
  );
}
