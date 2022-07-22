import React from "react";
import { Link } from "react-router-dom";
import "./GoBack.css";

export default function GoBackBtn() {
  return (
    <div className="btn-container">
      <Link to="/home">
        <button className="button-62">Go Back</button>
      </Link>
    </div>
  );
}
