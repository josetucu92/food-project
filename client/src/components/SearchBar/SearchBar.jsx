import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../redux/actions/actions";
import "./SearchBar.css";

export const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipeByName(input));
    setInput("");
    setCurrentPage(1);
  };

  return (
    <div>
      <form className="form">
        <input
          className="input"
          type="search"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Go
        </button>
      </form>
    </div>
  );
};
