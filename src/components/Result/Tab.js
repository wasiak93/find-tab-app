import React from "react";

const Tab = ({ item }) => {
  return (
    <p className="item__tab" key={item}>
      Tab:{" "}
      {item === "TEXT_GUITAR_TAB"
        ? "GUITAR"
        : item === "TEXT_BASS_TAB"
        ? "BASS"
        : item}
    </p>
  );
};

export default Tab;
