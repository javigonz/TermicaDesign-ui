import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/about" />
        </Route>
        <Route
          path="/about"
          exact={true}
          render={(props) => (
            <Layout select="about">
              <About {...props}> </About>
            </Layout>
          )}
        />
        <Route
          path="/work"
          render={(props) => (
            <Layout select="work">
              <Work {...props}> </Work>
            </Layout>
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <Layout select="contact">
              <Contact {...props}> </Contact>
            </Layout>
          )}
        />
        <Redirect to="/about" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
