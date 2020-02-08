import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import "./Tab.css";

const Tab = ({ item, title, artist }) => {
  return (
    <a
      href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${
        artist.name
      }&track=bass&inst=${
        item === "TEXT_GUITAR_TAB"
          ? "guitar"
          : item === "TEXT_BASS_TAB"
          ? "bass"
          : item.toLowerCase()
      }`}
      className="tab"
    >
      <FontAwesomeIcon icon={faGuitar} className="icon" />
      {item === "TEXT_GUITAR_TAB"
        ? "GUITAR"
        : item === "TEXT_BASS_TAB"
        ? "BASS"
        : item}
    </a>
  );
};

export default Tab;
