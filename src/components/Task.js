import React from "react";
import "../styles/Task.css";

const Task = (props) => {
  return (
    <ul>
      <li>
        {props.name} - {props.date}
      </li>
    </ul>
  );
};
export default Task;
