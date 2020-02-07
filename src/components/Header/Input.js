import React from "react";
import "./Input.css";

const Input = ({ value, change }) => {
  return (
    <input
      className="form__input"
      type="text"
      placeholder="title or artist"
      value={value}
      onChange={change}
    />
  );
};

export default Input;
