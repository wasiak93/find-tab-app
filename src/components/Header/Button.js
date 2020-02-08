import React from "react";
import "./Button.css";

const Button = ({ click, id, selected, view }) => {
  return (
    <button
      className={selected ? "active__button button__tab" : "button__tab"}
      onClick={() => click(id)}
    >
      {view}
    </button>
  );
};

export default Button;
