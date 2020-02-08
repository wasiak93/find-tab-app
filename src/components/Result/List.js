import React from "react";
import ListItem from "./ListItem";

const List = ({ data, selectedTabs }) => {
  const items = data.map(item => {
    let isValid = true;
    selectedTabs.forEach(tab => {
      if (!item.tabTypes.includes(tab)) {
        isValid = false;
      }
    });
    if (isValid) {
      return <ListItem key={item.id} selectedTabs={selectedTabs} {...item} />;
    } else return null;
  });

  return <ul>{items}</ul>;
};

export default List;
