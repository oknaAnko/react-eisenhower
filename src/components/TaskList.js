//statusy(listy tasków): do, decide, delegate, drop
//taski do zrobienia: przedrostek "to"
//taski zrobione: przedrostek "done"
//taski usunięte: przedrostek "delete"

import React from "react";
import { Link } from "react-router-dom";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  //filtorawanie tasków po statusie
  const doTasksTable = props.tasks.filter((task) => task.status === "do");
  const decideTasksTable = props.tasks.filter(
    (task) => task.status === "decide"
  );
  const delegateTasksTable = props.tasks.filter(
    (task) => task.status === "delegate"
  );
  const dropTasksTable = props.tasks.filter((task) => task.status === "drop");

  // taski do zrobienia
  //do
  const toDoTasksTable = doTasksTable.filter((task) => !task.done);
  const toDoTasks = toDoTasksTable.map((task) => (
    <Task
      key={task.id}
      task={task}
      // name={task.name}
      // date={task.date}
      moveToDone={props.moveToDone}
      deleteTask={props.deleteTask}
    />
  ));
  //decide
  const toDecideTasksTable = decideTasksTable.filter((task) => !task.done);
  const toDecideTasks = toDecideTasksTable.map((task) => (
    <Task
      key={task.id}
      task={task}
      moveToDone={props.moveToDone}
      deleteTask={props.deleteTask}
    />
  ));
  //delegate
  const toDelegateTasksTable = delegateTasksTable.filter((task) => !task.done);
  const toDelegateTasks = toDelegateTasksTable.map((task) => (
    <Task
      key={task.id}
      task={task}
      moveToDone={props.moveToDone}
      deleteTask={props.deleteTask}
    />
  ));
  //drop
  const toDropTasksTable = dropTasksTable.filter((task) => !task.done);
  const toDropTasks = toDropTasksTable.map((task) => (
    <Task
      key={task.id}
      task={task}
      moveToDone={props.moveToDone}
      deleteTask={props.deleteTask}
    />
  ));

  //taski zrobione
  //do
  const doneDoTasksTable = doTasksTable.filter((task) => task.done);
  const doneDoTasks = doneDoTasksTable.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));
  //decide
  const doneDecideTasksTable = decideTasksTable.filter((task) => task.done);
  const doneDecideTasks = doneDecideTasksTable.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));
  //delegate
  const doneDelegateTasksTable = delegateTasksTable.filter((task) => task.done);
  const doneDelegateTasks = doneDelegateTasksTable.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));
  //drop
  const doneDropTasksTable = dropTasksTable.filter((task) => task.done);
  const doneDropTasks = doneDropTasksTable.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));

  return (
    <div className="lists">
      <div className="doList">
        <h2>Fire!</h2>
        <p>(zrób szybko, bo się pali)</p>
        {toDoTasks}
        <h2>Zrobione</h2>
        {doneDoTasks}
        <Link to="/fire" className="goToAnotherView">
          więcej
        </Link>
      </div>
      <div className="decideList">
        <h2>Zaplanuj przyszłość</h2>
        <p>(zaplanuj to, co jest ważne)</p>
        {toDecideTasks}
        <h2>Zrobione</h2>
        {doneDecideTasks}
        <Link to="/zaplanuj" className="goToAnotherView">
          więcej
        </Link>
      </div>
      <div className="delegateList">
        <h2>Zrób i zapomnij</h2>
        <p>(zrób lub oddeleguj, bo po co się męczyć)</p>
        {toDelegateTasks}
        <h2>Zrobione</h2>
        {doneDelegateTasks}
        <Link to="/zapomnij" className="goToAnotherView">
          więcej
        </Link>
      </div>
      <div className="dropList">
        <h2>A gdy masz gorszy czas...</h2>
        <p>(lepiej sobie odpuścić, bo to tzw. "zapychacze czasu")</p>
        {toDropTasks}
        <h2>Zrobione</h2>
        {doneDropTasks}
        <Link to="/gorszyczas" className="goToAnotherView">
          więcej
        </Link>
      </div>
    </div>
  );
};
export default TaskList;
