import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//bring components together 
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";

//inherited css 
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        {/* header element for all pages */}
        <Header />

        {/* switch to move around pages */}
        <Switch>
          {/* home path --will take us to watch list */}
          <Route exact path="/">
            <Watchlist />
          </Route>

          {/* add page to show add component */}
          <Route path="/add">
            <Add />
          </Route>

          {/* path for watched component */}
          <Route path="/watched">
            <Watched />
          </Route>
          
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
