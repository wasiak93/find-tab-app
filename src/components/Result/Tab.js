import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import "./Tab.css";

const Tab = ({ item, title, artist }) => {
  return (
    <a
      href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${
        artist.name
      }&track=bass&inst=${item.toLowerCase()}`}
      className="tab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGuitar} className="icon" />
      {item}
    </a>
  );
};

export default Tab;
