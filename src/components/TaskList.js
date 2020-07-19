import React from "react";
import Task from "./Task";

const TaskList = (sth) => {
  const { tasks, doneTasks, deletedTasks, title } = sth;
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
    <div>
      {title}
      <p>do zrobienia</p>
      {undoneTasksTable}
      <p>zrobione</p>
      {doneTasksTable}
      <p>usunięte</p>
      {deletedTasksTable}
    </div>
  );
};

export default TaskList;
