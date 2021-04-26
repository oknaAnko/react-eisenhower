import React from "react";

import { Card, Elevation } from "@blueprintjs/core";

const TaskForToday = (props) => {
  const { name, status } = props.task;

  return (
    <Card
      className="oneTodayTaskCard"
      interactive={false}
      elevation={Elevation.ONE}
    >
      <p>
        {" "}
        <span className={`colorStatus ${status}`}></span>
        <span className="vertical-txt"> {name}</span>
      </p>
    </Card>
  );
};

export default TaskForToday;
