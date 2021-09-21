import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
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
            path="/skills"
            render={(props) => (
              <Layout select="skills">
                <Skills {...props}> </Skills>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
