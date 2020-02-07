import React from "react";
import Input from "./Input";
import "./Form.css";

const Form = ({ search, change, value }) => {
  return (
    <form action="submit" onSubmit={search} className="header__form">
      <Input change={change} value={value} />
      <button className="form__search">search</button>
    </form>
  );
};

export default Form;
