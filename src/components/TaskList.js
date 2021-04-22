import React from "react";
import Task from "./Task";
import { Card, Elevation, H6, Button } from "@blueprintjs/core";
import "../styles/TaskList.css";

const TaskList = (sth) => {
  const {
    tasks,
    doneTasks,
    deletedTasks,
    showedInMainView,
    completionDate,
    clearDeleteList,
  } = sth;


  const undoneTasks = tasks.filter((task) => !task.done);

  undoneTasks.sort((a, b) => {
    return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
  });

  const undoneTasksTable = undoneTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  doneTasks.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  const doneTasksTable = doneTasks.map((task) => (
    <Task key={task.id} task={task} completionDate={completionDate} />
  ));

  const deletedTasksTable = deletedTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  return (
    <>
      <Card className="tasksCard" interactive={false} elevation={Elevation.ONE}>
        <H6>do zrobienia</H6>
        {showedInMainView ? undoneTasksTable.slice(0, 3) : undoneTasksTable}
      </Card>

      <Card className="tasksCard" interactive={false} elevation={Elevation.ONE}>
        <H6>zrobione</H6>
        {showedInMainView ? doneTasksTable.slice(0, 3) : doneTasksTable}
      </Card>

      {showedInMainView ? null : (
        <Card
          className="tasksCard"
          interactive={false}
          elevation={Elevation.ONE}
        >
          <H6>usunięte</H6>
          {deletedTasksTable}

          <Button
            className="bp3-intent-primary bp3-small goToAnotherView"
            onClick={() => clearDeleteList()}
          >
            WYCZYŚĆ
          </Button>
        </Card>
      )}
    </>
  );
};

export default TaskList;
