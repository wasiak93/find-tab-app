import React from "react";
import Button from "./Button";

const Tabs = ({ selectedButtons, click }) => {
  const buttons = selectedButtons.map(item => (
    <Button key={item.name} click={click} {...item} />
  ));
  return <div className="header__tabs">{buttons}</div>;
};

export default Tabs;
