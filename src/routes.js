import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import EditForm from "./components/EditForm/EditForm";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Form} path="/addinventory" />
    <Route component={EditForm} path="/editproduct/:id" />
  </Switch>
);
