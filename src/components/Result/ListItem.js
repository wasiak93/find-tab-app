import React from "react";
import "./ListItem.css";
import Tab from "./Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMusic } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ title, artist, tabTypes }) => {
  const tabs = tabTypes.map(item => (
    <Tab key={item} item={item} title={title} artist={artist} />
  ));
  return (
    <li className="list__item">
      <div className="song">
        <p className="song__artist">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
          {artist.name}
        </p>
        <p className="song__title">
          <FontAwesomeIcon icon={faMusic} className="icon" /> {title}
        </p>
      </div>
      <div className="item__tabs">{tabs}</div>
    </li>
  );
};

export default ListItem;
