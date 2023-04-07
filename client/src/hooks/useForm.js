import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRecipe } from "../redux/actions/actions";

export default function useForm(validate) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(inputs));
    alert("Recipe created!");
    console.log(inputs);
    cleanInputs();
  };

  const handleDietChange = (e) => {
    if (inputs.diets.includes(e.target.value)) {
      return alert("You have already selected that diet");
    } else {
      setInputs({
        ...inputs,
        diets: [...inputs.diets, e.target.value],
      });
      setErrors(
        validate({ ...inputs, diets: [...inputs.diets, e.target.value] })
      );
    }
  };

  const handleDelete = (dietDelete) => {
    setInputs({
      ...inputs,
      diets: inputs.diets.filter((diet) => diet !== dietDelete),
    });
    setErrors(
      validate({
        ...inputs,
        diets: inputs.diets.filter((diet) => diet !== dietDelete),
      })
    );
  };

  const cleanInputs = () => {
    setInputs({
      name: "",
      summary: "",
      healthScore: "",
      steps: "",
      diets: [],
    });
  };

  return {
    handleChange,
    inputs,
    setInputs,
    handleSubmit,
    handleDietChange,
    handleDelete,
    errors,
    cleanInputs,
  };
}
