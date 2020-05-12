import React from 'react';
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>


  );
}

export default App;
