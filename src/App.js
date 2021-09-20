import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Skills from "./components/Skills";
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
              <Layout>
                <About {...props}> </About>
              </Layout>
            )}
          />
          <Route
            path="/about"
            exact={true}
            render={(props) => (
              <Layout>
                <About {...props}> </About>
              </Layout>
            )}
          />
          <Route
            path="/skills"
            render={(props) => (
              <Layout>
                <Skills {...props}> </Skills>
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
