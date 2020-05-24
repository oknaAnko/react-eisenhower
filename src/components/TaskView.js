import React from "react";
import { Link } from "react-router-dom";
// import TaskList from "./TaskList";

const TaskView = (props) => {
  console.log(props);
  return (
    <div>
      <p>Działa strona TaskView</p>
      {/* <TaskList
          tasks={this.state.tasks}
          moveToDone={this.moveTaskToDoneList}
        /> */}
      <Link to="/" className="goToAnotherView">
        powrót>
      </Link>
    </div>
  );
};

export default TaskView;
