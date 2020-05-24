import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class MainView extends Component {
  counter = 0;
  state = {
    tasks: [
      {
        id: this.counter,
        name: "",
        date: "",
        status: null,
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 0,
        name: "zad1",
        date: "2020-26-04",
        status: "do",
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 1,
        name: "zad2",
        date: "2020-26-04",
        status: "decide",
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 2,
        name: "zad3",
        date: "2020-26-04",
        status: "delegate",
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 3,
        name: "zad4",
        date: "2020-26-04",
        status: "drop",
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 4,
        name: "zad4",
        date: "2020-26-04",
        status: "do",
        // active: true,
        done: false,
        deleted: false,
      },
      {
        id: 5,
        name: "zad5",
        date: "2020-26-04",
        status: "do",
        // active: true,
        done: true,
        deleted: false,
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

  moveTaskToDoneList = (id) => {
    console.log("przenoszę do donelist");
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        console.log("jestem w task.done");
        task.done = true;
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  deleteTask = (id) => {
    console.log("usuwam cię");
    // const tasks = [...this.state.tasks];
    // tasks.forEach((task) => {
    //   if (task.id === id) {
    //     task.delete = true;
    //   }
    // });
    // this.setState({
    //   tasks: tasks,
    // });
    const tasks = [...this.state.tasks];
    const newtasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newtasks,
    });
  };

  render() {
    return (
      <div className="main">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          moveToDone={this.moveTaskToDoneList}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default MainView;
