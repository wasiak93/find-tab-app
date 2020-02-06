import React from "react";
import Input from "./Input";
import Tabs from "./Tabs";
import "./Form.css";

const Form = ({ change, search, value, data, buttonsActive, click }) => {
  return (
    <form action="submit" onSubmit={search}>
      <Input change={change} value={value} />
      <button className="form__search">search</button>
      <Tabs buttonsActive={buttonsActive} click={click} />
    </form>
  );
};

export default Form;
