import React from "react";

const Input = ({ value, change }) => {
  return (
    <input
      type="text"
      placeholder="title or artist"
      value={value}
      onChange={change}
    />
  );
};

export default Input;
