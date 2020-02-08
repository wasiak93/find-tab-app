import React from "react";
import Tabs from "./Tabs";
import "./Header.css";
import Form from "./Form";

const Header = ({ change, search, value, selectedButtons, click }) => {
  return (
    <div className="header">
      <Form change={change} search={search} value={value} />
      <Tabs selectedButtons={selectedButtons} click={click} />
    </div>
  );
};

export default Header;
