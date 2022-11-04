import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";

import "./App.css";
import Form from "./components/pages/Form";
//AWS S3 Bucket
import { Storage } from "aws-amplify";
//AWS Auth

import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

function App({ signOut }) {
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);

  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

  return (
    <div className="body-wrap">
      <button onClick={signOut}>Sign Out</button>
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      {fileStatus ? "File Uploaded" : ""}
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
