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
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signupform/Signup";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    //wrapping everything to the GlobalProvide so that
    //it has application access
    <GlobalProvider>
      <Router>
        {/* header element for all pages */}
        <Header />

        {/* switch to move around pages */}
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>

          {/* add page to show add component */}
          <Route path="/add">
            <Add />
          </Route>

          {/* path for watched component */}
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/">
            <Watchlist />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
