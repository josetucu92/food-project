import React from "react";
import { Link } from "react-router-dom";
import "./GoBack.css";

export const GoBackBtn = () => (
  <Link to="/home">
    <button className="button-62">Go Back</button>
  </Link>
);
