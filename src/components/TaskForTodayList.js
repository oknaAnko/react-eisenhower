import React from "react";
import TaskForToday from "./TaskForToday";
import { Card, Elevation, H6 } from "@blueprintjs/core";
import "../styles/TaskForTodayList.css";

const TaskForTodayList = ({ tasks }) => {
  const undoneTasksForToday = tasks.filter((task) => !task.done);

  undoneTasksForToday.sort((a, b) => {
    return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
  });

  const undoneTasksForTodayTable = undoneTasksForToday.map((task) => (
    <TaskForToday key={task.id} task={task} />
  ));

  return (
    <div>
      <Card
        className="todayTasksCard"
        interactive={false}
        elevation={Elevation.ONE}
      >
        <H6>Zadania na dziś</H6>
        {undoneTasksForTodayTable}
      </Card>
    </div>
  );
};

export default TaskForTodayList;
