import React from "react";
import "./ListItem.css";
import Tab from "./Tab";

const ListItem = ({ title, artist, tabTypes }) => {
  console.log(tabTypes);
  const tab = tabTypes.map(item => <Tab key={item} item={item} />);

  return (
    <li className="item">
      <p className="item__artist">Artist: {artist.name}</p>
      <p className="item__title">Title: {title}</p>
      {tab}
    </li>
  );
};

export default ListItem;
