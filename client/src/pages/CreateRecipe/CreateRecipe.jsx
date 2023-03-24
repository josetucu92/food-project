import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDiets } from "../../redux/actions/actions";
import useForm from "../../hooks/useForm";
import validate from "./validate";
import { GoBackBtn } from "../../components/";
import "./CreateRecipe.css";

export const CreateRecipePage = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const {
    handleChange,
    input,
    handleSubmit,
    handleDietChange,
    handleDelete,
    errors,
    cleanInputs,
  } = useForm(validate);

  // case user comes directly from landing page
  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  return (
    <div className="form-container">
      <GoBackBtn />

      <div className="create-form">
        <div className="cernet">
          <h1>Create your own recipe</h1>

          <form onSubmit={(e) => handleSubmit(e)} className="form-inputs">
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                value={input.name}
                name="name"
                placeholder="Enter recipe name"
                onChange={(e) => handleChange(e)}
              />
              <label className="form__label">Recipe name</label>
            </div>
            {errors.name && <p>{errors.name}</p>}

            <div className="form__group">
              <input
                className="form__input"
                type="text"
                value={input.summary}
                name="summary"
                placeholder="Enter recipe summary"
                onChange={(e) => handleChange(e)}
              />
              <label className="form__label">Summary: </label>
            </div>
            {errors.summary && <p>{errors.summary}</p>}

            <div className="form__group">
              <input
                className="form__input"
                type="text"
                value={input.steps}
                name="steps"
                placeholder="Enter recipe steps"
                onChange={(e) => handleChange(e)}
              />
              <label className="form__label">Steps: </label>
            </div>
            {errors.steps && <p>{errors.steps}</p>}

            <div>
              <label className="remaining">Healthscore: </label>
              <input
                type="range"
                value={input.healthScore}
                name="healthScore"
                placeholder="Enter recipe healthscore"
                onChange={(e) => handleChange(e)}
              />
              <i>{input.healthScore}</i>
            </div>
            {errors.healthScore && <p>{errors.healthScore}</p>}

            <div>
              <label className="remaining">Diet Types: </label>
              <select onChange={(e) => handleDietChange(e)}>
                <option hidden value="Recipes">
                  Select here
                </option>
                {diets?.map(({ name, id }) => {
                  return (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            {errors.diets && <p>{errors.diets}</p>}

            <div>
              {input.diets?.map((diet) => {
                return (
                  <div key={diet}>
                    <button
                      onClick={() => handleDelete(diet)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                    <h4>{diet}</h4>
                  </div>
                );
              })}
            </div>

            <div className="sub-form">
              {Object.keys(errors).length === 0 && input.diets?.length > 0 && (
                <button className="sub-form-btn" type="submit">
                  Create Recipe
                </button>
              )}
              <input
                className="sub-form-btn"
                type="button"
                value="Clean inputs"
                onClick={(e) => cleanInputs(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
