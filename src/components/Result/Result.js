import React from "react";
import List from "./List";

const Result = ({ data }) => {
  return (
    <div className="result">
      <List data={data} />
    </div>
  );
};

export default Result;
