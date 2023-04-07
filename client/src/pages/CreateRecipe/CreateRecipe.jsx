import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDiets } from "../../redux/actions/actions";
import useForm from "../../hooks/useForm";
import validate from "./validate";
import { GoBackBtn } from "../../components/";
import styles from "./CreateRecipe.module.css";

const STRINGS = {
  title: "Create your own recipe",
  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: "Enter recipe name",
      label: "Recipe name",
      value: "name",
    },
    {
      name: "summary",
      type: "text",
      placeholder: "Enter recipe summary",
      label: "Summary",
      value: "summary",
    },
    {
      name: "steps",
      type: "text",
      placeholder: "Enter recipe steps",
      label: "Steps",
      value: "steps",
    },
    {
      name: "healthScore",
      type: "range",
      placeholder: "Select recipe healthscore",
      label: "Healthscore",
      value: "healthScore",
    },
  ],
  submitBtns: [
    {
      type: "submit",
      text: "Create Recipe",
    },
    {
      type: "button",
      text: "Clean inputs",
    },
  ],
};

export const CreateRecipePage = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const {
    handleChange,
    inputs,
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
    <div className={styles.formContainer}>
      <GoBackBtn />

      <div className={styles.center}>
        <h1>{STRINGS.title}</h1>

        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          {STRINGS.inputs.map((input) => (
            <div key={input.name}>
              {input.name === "healthScore" && (
                <label className={styles.remaining}>
                  {input.placeholder}: {inputs.healthScore}
                </label>
              )}
              <input
                className={styles.formInput}
                type={input.type}
                value={inputs[input.value]}
                name={input.name}
                placeholder={input.placeholder}
                onChange={(e) => handleChange(e)}
              />
              <label className={styles.formLabel}>{input.label}</label>
              {errors[input.name] && <p>{errors[input.name]}</p>}
            </div>
          ))}

          <div>
            <label className={styles.remaining}>Diet Types: </label>
            <select onChange={(e) => handleDietChange(e)}>
              <option hidden value="Recipes">
                Select here
              </option>
              {diets?.map(({ name, id }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {errors.diets && <p>{errors.diets}</p>}

          {inputs.diets?.map((diet) => (
            <div className={styles.flexRow} key={diet}>
              <h4>{diet}</h4>
              <button
                onClick={() => handleDelete(diet)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          ))}

          <div className={styles.flexRow}>
            {STRINGS.submitBtns.map((btn) => (
              <button
                key={btn.text}
                type={btn.type}
                className={styles.btnSubmit}
                onClick={btn.text === "Clean inputs" && cleanInputs}
                disabled={
                  btn.text === "Create Recipe" &&
                  (errors.diets ||
                    errors.name ||
                    errors.summary ||
                    errors.steps ||
                    inputs.diets.length === 0)
                }
              >
                {btn.text}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};
