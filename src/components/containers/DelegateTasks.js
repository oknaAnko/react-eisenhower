import { connect } from "react-redux";
import TaskList from "../TaskList";
import { clearDeleteList } from "../actions";

const mapStateToProps = (state) => ({
  tasks: state.tasks.filter(
    (task) => task.status === "delegate" && !task.deleted
  ),
  doneTasks: state.tasks.filter(
    (task) => task.status === "delegate" && task.done && !task.deleted
  ),
  deletedTasks: state.tasks.filter(
    (task) => task.status === "delegate" && task.deleted
  ),
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearDeleteList: () => dispatch(clearDeleteList("delegate")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
