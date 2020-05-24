import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./layouts/Header";
import MainView from "./MainView";
import TaskView from "./TaskView";
import Footer from "./layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header>
            <Header />
          </header>
          <Switch>
            <Route path="/" exact component={MainView} />
            <Route path="/:id" component={TaskView} />
            {/* <Route path="/zaplanuj" component={TaskView} />
            <Route path="/zapomnij" component={TaskView} />
            <Route path="/gorszyczas" component={TaskView} /> */}
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
//
