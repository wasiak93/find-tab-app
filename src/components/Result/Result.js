import React from "react";
import List from "./List";

const Result = ({ data, selectedTabs, result, convert }) => {
  console.log(typeof data);
  let resultHeader = "";
  if (data.length >= 1) {
    resultHeader = (
      <List
        data={data}
        selectedTabs={selectedTabs}
        result={result}
        convert={convert}
      />
    );
  } else if (result.length >= 1 && typeof data === "object")
    resultHeader = <h1> Sorry we don't have "{result}" in our database</h1>;

  return <>{resultHeader}</>;
};

export default Result;
