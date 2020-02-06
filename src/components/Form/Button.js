import React from "react";
import "./Button.css";

const Button = ({ click, id, name, active }) => {
  return (
    <button
      className={active ? "active__button button__tab" : "button__tab"}
      onClick={() => click(id)}
    >
      {name}
    </button>
  );
};

export default Button;
