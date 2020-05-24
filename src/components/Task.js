import React from "react";
import "../styles/Task.css";

const Task = (props) => {
  const { id, name, date, done } = props.task;
  if (!done) {
    return (
      <ul>
        <li>
          {name} - {date}{" "}
          <button className="moveTask" onClick={() => props.moveToDone(id)}>
            OK
          </button>{" "}
          <button className="moveTask" onClick={() => props.deleteTask(id)}>
            X
          </button>
        </li>
      </ul>
    );
  } else if (done) {
    return (
      <ul>
        <li>
          {name}{" "}
          <button className="moveTask" onClick={() => props.deleteTask(id)}>
            X
          </button>
        </li>
      </ul>
    );
  }
};
export default Task;
