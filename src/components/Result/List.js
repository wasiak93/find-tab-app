import React from "react";
import ListItem from "./ListItem";

const List = ({ data, selectedTabs, result, convert }) => {
  let number = 0;
  let selectedTabsText = [];
  selectedTabs.forEach(tab => selectedTabsText.push(` ${tab.toLowerCase()}`));

  const items = data.map(item => {
    item.tabTypes = convert(item.tabTypes);
    let isValid = true;
    selectedTabs.forEach(tab => {
      if (!item.tabTypes.includes(tab)) {
        isValid = false;
      }
    });
    if (isValid) {
      number++;
      return (
        <ListItem
          key={item.id}
          selectedTabs={selectedTabs}
          convert={convert}
          {...item}
        />
      );
    } else return null;
  });

  return (
    <div className="result">
      <h1>
        Results for: "{result}" ({number})
      </h1>
      <p className="result__acapit">
        And tabs:
        {selectedTabs.length === 0
          ? " player, guitar, chords, bass"
          : ` ${selectedTabsText}`}
      </p>
      <ul>{items}</ul>
    </div>
  );
};

export default List;
