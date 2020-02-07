import React from "react";
import ListItem from "./ListItem";

const List = ({ data, activeTasks }) => {
  const item =
    activeTasks.length > 0
      ? data.map(item =>
          item.tabTypes.includes(activeTasks[0]) ? (
            activeTasks.length === 1 ? (
              <ListItem key={item.id} activeTasks={activeTasks} {...item} />
            ) : item.tabTypes.includes(activeTasks[1]) ? (
              activeTasks.length === 2 ? (
                <ListItem key={item.id} activeTasks={activeTasks} {...item} />
              ) : item.tabTypes.includes(activeTasks[2]) ? (
                activeTasks.length === 3 ? (
                  <ListItem key={item.id} activeTasks={activeTasks} {...item} />
                ) : item.tabTypes.includes(activeTasks[3]) ? (
                  <ListItem key={item.id} activeTasks={activeTasks} {...item} />
                ) : null
              ) : null
            ) : null
          ) : null
        )
      : data.map(item => (
          <ListItem key={item.id} activeTasks={activeTasks} {...item} />
        ));
  return <ul>{item}</ul>;
};

export default List;
