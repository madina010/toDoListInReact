import React, { useState } from "react";
import "./add-task.css";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const onValueChange = (e) => {
    setTaskName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (taskName.length < 3) return;
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <div className="add-task">
      <h3>Add your new task</h3>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="write here...."
          name="taskName"
          value={taskName}
          onChange={onValueChange}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
