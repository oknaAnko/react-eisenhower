import React, { Component } from "react";
import "../styles/App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 0;
  state = {
    tasks: [
      {
        id: this.counter,
        name: "",
        date: "",
        status: null,
      },
    ],
  };

  // tasks = [
  //   { id: 0, name: "zad1", date: "2020-26-04", status: "do" },
  //   { id: 1, name: "zad2", date: "2020-26-04", status: "decide" },
  //   { id: 2, name: "zad3", date: "2020-26-04", status: "delegate" },
  //   { id: 3, name: "zad4", date: "2020-26-04", status: "drop" },
  // ];

  addTask = (name, date, status) => {
    const newTask = {
      id: this.counter,
      name: name,
      date: date,
      status: status,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
    console.log("dodaje nowy obiekt");
    return true;
  };
  render() {
    return (
      <div>
        <h1>Do it with Eisenhower</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
