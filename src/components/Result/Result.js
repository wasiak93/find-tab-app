import React from "react";
import List from "./List";

const Result = ({ data, activeTasks }) => {
  return (
    <div className="result">
      <List data={data} activeTasks={activeTasks} />
    </div>
  );
};

export default Result;
