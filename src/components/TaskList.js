import React from "react";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const doTasksTable = props.tasks.filter((task) => task.status === "do");
  const decideTasksTable = props.tasks.filter(
    (task) => task.status === "decide"
  );
  const delegateTasksTable = props.tasks.filter(
    (task) => task.status === "delegate"
  );
  const dropTasksTable = props.tasks.filter((task) => task.status === "drop");

  const doTasks = doTasksTable.map((task) => (
    <Task key={task.id} name={task.name} date={task.date} />
  ));
  const decideTasks = decideTasksTable.map((task) => (
    <Task key={task.id} name={task.name} date={task.date} />
  ));
  const delegateTasks = delegateTasksTable.map((task) => (
    <Task key={task.id} name={task.name} date={task.date} />
  ));
  const dropTasks = dropTasksTable.map((task) => (
    <Task key={task.id} name={task.name} date={task.date} />
  ));

  return (
    <div className="lists">
      <div className="doList">
        <h2>Fire!</h2>
        <p>{props.name}</p>
        {doTasks}
      </div>
      <div className="decideList">
        <h2>Zaplanuj przyszłość</h2>
        {decideTasks}
      </div>
      <div className="delegateList">
        <h2>Zrób i zapomnij</h2>
        {delegateTasks}
      </div>
      <div className="dropList">
        <h2>A gdy masz gorszy czas...</h2>
        {dropTasks}
      </div>
    </div>
  );
};
export default TaskList;
