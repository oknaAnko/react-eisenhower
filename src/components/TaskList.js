import React from "react";
import Task from "./Task";

const TaskList = (sth) => {
  const { tasks, doneTasks, deletedTasks, title, showedIn } = sth;
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
      {showedIn ? undoneTasksTable.slice(0, 3) : undoneTasksTable}
      <p>zrobione</p>
      {showedIn ? doneTasksTable.slice(0, 3) : doneTasksTable}
      <p>usunięte</p>
      {showedIn ? deletedTasksTable.slice(0, 3) : deletedTasksTable}
    </div>
  );
};

export default TaskList;
