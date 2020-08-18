//redux thunk
export const addTask = (name, date, status) => {
  return (dispatch, getState) => {
    const nextId = getState().tasks.length + 1;
    dispatch(addTodoSucces(nextId, name, date, status));
  };
};

export const addTodoSucces = (id, name, date, status) => {
  return {
    type: "ADD_TASK",
    id,
    name,
    date,
    status,
  };
};

export const moveToDoneList = (id) => {
  return {
    type: "MOVE_TO_DONE",
    id,
  };
};

export const moveToDeleteList = (id) => {
  return {
    type: "MOVE_TO_DELETE",
    id,
  };
};

//fix me - delete all tasks from deletedList
// export const deleteAll = (id) => {
//   return {
//     type: "DELETE_ALL",
//     id,
//   };
// };
