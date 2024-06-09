import React from "react";

const TaskList = ({ data, onDelete, onAdd }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <li key={id}>{item.taskName}</li>;
  });
  return <ul>{elements}</ul>;
};

export default TaskList;
