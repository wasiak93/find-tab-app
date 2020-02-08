import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import "./Tab.css";

const Tab = ({ item }) => {
  return (
    <p className="tab">
      <FontAwesomeIcon icon={faGuitar} className="icon" />
      {item === "TEXT_GUITAR_TAB"
        ? "GUITAR"
        : item === "TEXT_BASS_TAB"
        ? "BASS"
        : item}
    </p>
  );
};

export default Tab;
