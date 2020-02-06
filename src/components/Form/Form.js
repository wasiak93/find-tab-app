import React from "react";
import Input from "./Input";
import Tabs from "./Tabs";

const Form = ({ change, search, value, data, buttonsActive, click }) => {
  return (
    <form action="submit" onSubmit={search}>
      <Input change={change} value={value} />
      <button>search</button>
      <Tabs buttonsActive={buttonsActive} click={click} />
    </form>
  );
};

export default Form;
