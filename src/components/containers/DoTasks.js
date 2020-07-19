import { connect } from "react-redux";
import TaskList from "../TaskList";

const mapStateToProps = (state) => ({
  tasks: state.tasks.filter((task) => task.status === "do" && !task.deleted),
  doneTasks: state.tasks.filter(
    (task) => task.status === "do" && task.done && !task.deleted
  ),
  deletedTasks: state.tasks.filter(
    (task) => task.status === "do" && task.deleted
  ),
});

export default connect(mapStateToProps, null)(TaskList);
