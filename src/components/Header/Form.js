import React from "react";
import Input from "./Input";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = ({ search, change, value }) => {
  return (
    <form action="submit" onSubmit={search} className="header__form">
      <Input change={change} value={value} />
      <button className="form__search">
        <FontAwesomeIcon icon={faSearch} className="form__icon" /> search
      </button>
    </form>
  );
};

export default Form;
