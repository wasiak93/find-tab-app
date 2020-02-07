import React from "react";
import "./ListItem.css";
import Tab from "./Tab";

const ListItem = ({ activeTasks, title, artist, tabTypes }) => {
  // console.log(tabTypes);
  const tabs = tabTypes.map(item => (
    <Tab key={item} item={item} activeTasks={activeTasks} />
  ));
  // const tabs = tabTypes.map(item =>
  //   activeTasks.map(tab =>
  //     tab.name === item ? (
  //       <Tab key={item} item={item} activeTasks={activeTasks} />
  //     ) : null
  //   )
  // );

  return (
    <li className="item">
      <p className="item__artist">Artist: {artist.name}</p>
      <p className="item__title">Title: {title}</p>
      {tabs}
    </li>
  );
};

export default ListItem;
