import React from "react";
import Task from "./Task";
import { Card, Elevation, H6, Button } from "@blueprintjs/core";
import "../styles/TaskList.css";

//fix me - delete all tasks from deletedList
// import { deteleAll } from "./actions";

const TaskList = (sth) => {
  const { tasks, doneTasks, deletedTasks, showedIn } = sth;
  const undoneTasks = tasks.filter((task) => !task.done);
  const undoneTasksTable = undoneTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));
  const doneTasksTable = doneTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  const deletedTasksTable = deletedTasks.map((task) => (
    <Task key={task.id} task={task} />
  ));

  return (
    <>
      <Card className="tasksCard" interactive={false} elevation={Elevation.ONE}>
        <H6>do zrobienia</H6>
        {showedIn ? undoneTasksTable.slice(0, 3) : undoneTasksTable}
      </Card>

      <Card className="tasksCard" interactive={false} elevation={Elevation.ONE}>
        <H6>zrobione</H6>
        {showedIn ? doneTasksTable.slice(0, 3) : doneTasksTable}
      </Card>

      {showedIn ? null : (
        <Card
          className="tasksCard"
          interactive={false}
          elevation={Elevation.ONE}
        >
          <H6>usunięte</H6>
          {deletedTasksTable}
          <Button
            className="bp3-intent-primary bp3-small goToAnotherView"
            // onClick={() => props.dispatch(deleteAll(id))}
          >
            WYCZYŚĆ
          </Button>
        </Card>
      )}
    </>
  );
};

export default TaskList;
