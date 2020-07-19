const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            name: action.name,
            date: action.date,
            status: action.status,
            done: false,
            deleted: false,
          },
        ],
      });
    case "MOVE_TO_DONE":
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          if (action.id === task.id) {
            return Object.assign({}, task, {
              done: true,
            });
          }
          return task;
        }),
      });
    case "MOVE_TO_DELETE":
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          if (action.id === task.id) {
            return Object.assign({}, task, {
              deleted: true,
            });
          }
          return task;
        }),
      });
    default:
      return state;
  }
};

export default taskReducer;
