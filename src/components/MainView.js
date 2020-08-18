import React from "react";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import "../styles/MainView.css";
import { Card, Elevation, H3 } from "@blueprintjs/core";
import DoTasks from "./containers/DoTasks";
import DecideTasks from "./containers/DecideTasks";
import DelegateTasks from "./containers/DelegateTasks";
import DropTasks from "./containers/DropTasks";

const MainView = () => {
  const showedInMainView = true;
  return (
    <div className="main">
      <AddTask />
      <div className="lists">
        <Card
          className="doList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Fire</H3>
          <p>(zrób szybko, bo się pali)</p>
          <DoTasks showedIn={showedInMainView} />
          <Link
            to="/tasks"
            className="bp3-button bp3-intent-primary goToAnotherView"
            // role="button"
            tabIndex={0}
          >
            więcej
          </Link>
        </Card>

        <Card
          className="decideList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Zaplanuj przyszłość</H3>
          <p>(zaplanuj to, co jest ważne)</p>
          <DecideTasks showedIn={showedInMainView} />
          <Link
            to="/tasks"
            className="bp3-button bp3-intent-primary goToAnotherView"
            tabIndex={0}
          >
            więcej
          </Link>
        </Card>

        <Card
          className="delegateList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>Zrób i zapomnij</H3>
          <p>(zrób lub oddeleguj, bo po co się męczyć)</p>
          <DelegateTasks showedIn={showedInMainView} />
          <Link
            to="/tasks"
            className="bp3-button bp3-intent-primary goToAnotherView"
            tabIndex={0}
          >
            więcej
          </Link>
        </Card>

        <Card
          className="dropList"
          interactive={false}
          elevation={Elevation.THREE}
        >
          <H3>A gdy masz gorszy czas...</H3>
          <p>(lepiej sobie odpuścić, bo to tzw. "zapychacze czasu")</p>
          <DropTasks showedIn={showedInMainView} />
          <Link
            to="/tasks"
            className="bp3-button bp3-intent-primary goToAnotherView"
            tabIndex={0}
          >
            więcej
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default MainView;
