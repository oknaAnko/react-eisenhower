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

export const clearDeleteList = (status) => {
  return {
    type: "CLEAR_LIST",
    status,
  };
};
