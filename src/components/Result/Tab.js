import React from "react";

const Tab = ({ item }) => {
  console.log(item);
  return (
    <p>
      {item === "TEXT_GUITAR_TAB"
        ? "GUITAR"
        : item === "TEXT_BASS_TAB"
        ? "BASS"
        : item}
    </p>
  );
};

export default Tab;
