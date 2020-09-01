import { connect } from "react-redux";
import TaskForTodayList from "../TaskForTodayList";

const todayDate = new Date().toISOString().slice(0, 10);

const mapStateToProps = (state) => ({
  tasks: state.tasks.filter((task) => task.deadline === todayDate),
});

export default connect(mapStateToProps)(TaskForTodayList);
