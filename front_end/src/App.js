import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

import "./App.css";


import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Error404 from "./Views/Error404/Error404";
import AdminView from "./Views/Admin/Admin";
import MovieDetails from "./Views/MovieDetails/MovieDetails";
import AllShows from "./Views/AllShows/AllShows";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin" component={AdminView} />
          <Provider store={store}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shows" component={AllShows} />
            <Route exact path="/movie/:id" component={MovieDetails} />
            {/* <Route component={Error404} status={404} /> */}
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
