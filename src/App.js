import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";

import "./App.css";
import Form from "./components/pages/Form";

//AWS Auth

import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="body-wrap">
      <button onClick={signOut}>Sign Out</button>
      <Router>
        <Layout>
          <Switch>
            <Route path={"/Form"} component={Form}></Route>
            <Route path={"/AboutUs"} component={AboutUs}></Route>
            <Route path={"/ContactUs"} component={ContactUs}></Route>
            <Route path={"/"} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
