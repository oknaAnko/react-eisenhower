import React from "react";
import { Link } from "react-router-dom";
import { Card, Elevation, H3 } from "@blueprintjs/core";
import DoTasks from "./containers/DoTasks";
import DecideTasks from "./containers/DecideTasks";
import DelegateTasks from "./containers/DelegateTasks";
import DropTasks from "./containers/DropTasks";

const TaskView = () => {
  const completionDate = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <Link
        to="/"
        className="bp3-button bp3-intent-primary goToAnotherView"
        tabIndex={0}
      >
        powrót
      </Link>
      <div className="lists">
        <Card
          className="doList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Fire</H3>
          <p>(zrób szybko, bo się pali)</p>
          <DoTasks showedInMainView={false} completionDate={completionDate} />
        </Card>

        <Card
          className="decideList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Zaplanuj przyszłość</H3>
          <p>(zaplanuj to, co jest ważne)</p>
          <DecideTasks
            showedInMainView={false}
            completionDate={completionDate}
          />
        </Card>

        <Card
          className="delegateList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Zrób i zapomnij</H3>
          <p>(zrób lub oddeleguj, bo po co się męczyć)</p>
          <DelegateTasks
            showedInMainView={false}
            completionDate={completionDate}
          />
        </Card>

        <Card
          className="dropList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>A gdy masz gorszy czas...</H3>
          <p>(lepiej sobie odpuścić, bo to tzw. "zapychacze czasu")</p>
          <DropTasks showedInMainView={false} completionDate={completionDate} />
        </Card>
      </div>
    </div>
  );
};

export default TaskView;
