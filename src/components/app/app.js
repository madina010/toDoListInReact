import React, { Component } from "react";
import "./app.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import Header from "../header/header";
import AddTask from "../add-task/add-task";
import TaskList from "../task-list/task-list";

class NewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { taskName: 'Go to school', complete: false, almost: false, id: 1 },
        { taskName: 'Go shopping', complete: true, almost: false, id: 2 },
        { taskName: 'Do sport', complete: false, almost: false, id: 3 },
      ]
    };
    this.maxId = 4;

    this.addItem = this.addItem.bind(this);
  }

  deleteItem = (id) => {
    console.log("Deleting task with id:", id);
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem(taskName) {
    console.log("Adding task:", taskName); 
    const newItem = {
      taskName,
      complete: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }
  

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div>
          <AddTask onAdd={this.addItem} />
          <AppFilter />
        </div>
        <TaskList data={this.state.data} onDelete={this.deleteItem} onAdd={this.addItem} />
        <Header />
      </div>
    );
  }
}

export default NewApp;
