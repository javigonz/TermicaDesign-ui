import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";
import "@fontsource/la-belle-aurore";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <Layout select="about">
              <About {...props}> </About>
            </Layout>
          )}
        />
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
        <Route
          render={(props) => (
            <Layout>
              <NotFound {...props}> </NotFound>
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
