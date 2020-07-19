import { connect } from "react-redux";
import TaskList from "../TaskList";

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

export default connect(mapStateToProps)(TaskList);
