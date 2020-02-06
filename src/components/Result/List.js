import React from "react";
import ListItem from "./ListItem";

const List = ({ data }) => {
  console.log(data);
  const item = data.map(item => <ListItem key={item.id} {...item} />);
  return <ul>{item}</ul>;
};

export default List;
