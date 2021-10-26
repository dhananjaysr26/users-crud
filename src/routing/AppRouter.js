import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home";
import AddUser from "../components/AddUser";
import PageNotFound from "../components/PageNotFound";
export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}