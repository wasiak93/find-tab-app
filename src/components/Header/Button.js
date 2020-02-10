import React from "react";
import "./Button.css";

const Button = ({ click, id, selected, name }) => {
  return (
    <button
      className={selected ? "active__button button__tab" : "button__tab"}
      onClick={() => click(id)}
    >
      {name.toLowerCase()}
    </button>
  );
};

export default Button;
