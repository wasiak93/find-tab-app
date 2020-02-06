import React from "react";
import "./ListItem.css";

const ListItem = ({ title, artist, tabTypes }) => {
  const tab = tabTypes.map(item => <p key={item}>Tab: {item}</p>);
  console.log(tabTypes);
  return (
    <li className="item">
      <p className="item__artist">Artist: {artist.name}</p>
      <p className="item__title">Title: {title}</p>
      {tab}
    </li>
  );
};

export default ListItem;
