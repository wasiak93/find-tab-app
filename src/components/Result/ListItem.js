import React from "react";
import "./ListItem.css";

const ListItem = ({ title, artist, tabTypes }) => {
  const tab = tabTypes.map(item => (
    <p className="item__tab" key={item}>
      Tab:{" "}
      {item === "TEXT_GUITAR_TAB"
        ? "GUITAR"
        : item === "TEXT_BASS_TAB"
        ? "BASS"
        : item}
    </p>
  ));

  return (
    <li className="item">
      <p className="item__artist">Artist: {artist.name}</p>
      <p className="item__title">Title: {title}</p>
      {tab}
    </li>
  );
};

export default ListItem;
