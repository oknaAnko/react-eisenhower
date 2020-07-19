import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainView.css";
import DoTasks from "./containers/DoTasks";
import DecideTasks from "./containers/DecideTasks";
import DelegateTasks from "./containers/DelegateTasks";
import DropTasks from "./containers/DropTasks";

const TaskView = () => {
  return (
    <div>
      <p>Działa strona TaskView</p>
      <div className="lists">
        <div className="doList">
          <h2>Fire</h2>
          <p>(zrób szybko, bo się pali)</p>
          <DoTasks />
        </div>
        <div className="decideList">
          <h2>Zaplanuj przyszłość</h2>
          <p>(zaplanuj to, co jest ważne)</p>
          <DecideTasks />
        </div>
        <div className="delegateList">
          <h2>Zrób i zapomnij</h2>
          <p>(zrób lub oddeleguj, bo po co się męczyć)</p>
          <DelegateTasks />
        </div>
        <div className="dropList">
          <h2>A gdy masz gorszy czas...</h2>
          <p>(lepiej sobie odpuścić, bo to tzw. "zapychacze czasu")</p>
          <DropTasks />
        </div>
        <Link to="/" className="goToAnotherView">
          powrót
        </Link>
      </div>
    </div>
  );
};

export default TaskView;
