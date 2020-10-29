import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import Error404 from "./Views/Error404/Error404";
import AdminView from "./Views/Admin/Admin";
import MovieDetails from "./Views/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={AdminView} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Route component={Error404} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
