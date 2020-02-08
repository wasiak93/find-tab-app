import React from "react";
import List from "./List";

const Result = ({ data, selectedTabs, result }) => {
  return (
    <>
      {data.length >= 1 ? (
        <div className="result">
          <h1>Results for: "{result}"</h1>
          <List data={data} selectedTabs={selectedTabs} />
        </div>
      ) : result.length >= 1 ? (
        <h1> Sorry we don't have "{result}" in our database</h1>
      ) : null}
    </>
  );
};

export default Result;
