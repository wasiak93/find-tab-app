import React from "react";
import Input from "./Input";

const Form = ({ change, search, value, data }) => {
  return (
    <form action="submit" onSubmit={search}>
      <Input change={change} value={value} />
      <button>search</button>
    </form>
  );
};

export default Form;
