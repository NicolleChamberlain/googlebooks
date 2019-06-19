import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import SearchBook from "./components/SearchBook";
import SavedBook from "./components/SavedBook";
import NoMatch from "./components/NoMatch";
import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route component={SearchBook} />
          <Route component={SavedBook} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
