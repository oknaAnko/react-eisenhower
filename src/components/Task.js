import React from "react";
import "../styles/Task.css";
import { Card, Elevation, Button } from "@blueprintjs/core";
import { moveToDoneList, moveToDeleteList } from "./actions";
import { connect } from "react-redux";

const Task = (props) => {
  const { id, name, deadline, done, deleted } = props.task;
  if (!done && !deleted) {
    return (
      <Card
        className="oneTaskCard"
        interactive={false}
        elevation={Elevation.ONE}
      >
        <p className="small">termin: {deadline}</p>
        {name}{" "}
        <Button
          className="bp3-intent-primary bp3-small bp3-minimal bp3-outlined moveTask"
          icon="endorsed"
          onClick={() => props.dispatch(moveToDoneList(id))}
        />
        <Button
          className="bp3-intent-primary bp3-small bp3-minimal bp3-outlined moveTask"
          icon="delete"
          onClick={() => props.dispatch(moveToDeleteList(id))}
        />
      </Card>
    );
  } else if (done && !deleted) {
    return (
      <Card
        className="oneTaskCard"
        interactive={false}
        elevation={Elevation.ONE}
      >
        <p className="small">wykonano: {props.completionDate}</p>
        {name}{" "}
        <Button
          className="bp3-intent-primary bp3-small bp3-minimal bp3-outlined moveTask"
          icon="delete"
          onClick={() => props.dispatch(moveToDeleteList(id))}
        />
      </Card>
    );
  } else if (deleted) {
    return (
      <Card
        className="oneTaskCard"
        interactive={false}
        elevation={Elevation.ONE}
      >
        {name}
      </Card>
    );
  }
};
export default connect()(Task);
