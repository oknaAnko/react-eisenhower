import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

import taskReducer from "./reducers";
import "../styles/App.css";
import Header from "./layouts/Header";
import MainView from "./MainView";
import TaskView from "./TaskView";
import Footer from "./layouts/Footer";

/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   taskReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
/* eslint-enable */

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default () => {
let store = createStore(
  persistedReducer /* preloadedState, */,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk))
);
let persistor = persistStore(store);

//   return { store, persistor }
// }

// const store = createStore(taskReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <header>
              <Header />
            </header>
            <div className="wrapper">
              <Switch>
                <Route path="/" exact component={MainView} />
                <Route path="/:id" component={TaskView} />
              </Switch>
            </div>
            <footer>
              <Footer />
            </footer>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
//
