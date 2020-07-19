import React from "react";
import "../styles/Task.css";
import { moveToDoneList, moveToDeleteList } from "./actions";
import { connect } from "react-redux";

const Task = (props) => {
  const { id, name, date, done, deleted } = props.task;
  if (!done && !deleted) {
    return (
      <ul>
        <li>
          {name} - {date}{" "}
          <button
            className="moveTask"
            onClick={() => props.dispatch(moveToDoneList(id))}
          >
            OK
          </button>
          <button
            className="moveTask"
            onClick={() => props.dispatch(moveToDeleteList(id))}
          >
            X
          </button>
        </li>
      </ul>
    );
  } else if (done && !deleted) {
    return (
      <ul>
        <li>
          {name}{" "}
          <button
            className="moveTask"
            onClick={() => props.dispatch(moveToDeleteList(id))}
          >
            X
          </button>
        </li>
      </ul>
    );
  } else if (deleted) {
    return (
      <ul>
        <li>{name} </li>
      </ul>
    );
  }
};
export default connect()(Task);
