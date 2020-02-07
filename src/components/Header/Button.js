import React from "react";
import "./Button.css";

const Button = ({ click, id, name, active, view }) => {
  return (
    <button
      className={active ? "active__button button__tab" : "button__tab"}
      onClick={() => click(id)}
    >
      {view}
    </button>
  );
};

export default Button;
