import React from "react";
import './App.css';
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main/Main";
import {Route, Switch} from "react-router-dom";
import SingleNews from "./containers/SingleNews/SingleNews";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/news" exact component={Main} />
        <Route path="/news/:id" exact component={SingleNews} />
        <Route render={() => <h1 style={{textAlign: 'center'}}>404 not found</h1>} />
      </Switch>
    </Layout>
  );
}

export default App;
