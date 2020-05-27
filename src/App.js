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
        <Route path="/home" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/portfolio" component={Portfolio} />
        
      </Switch>
    </div>
  </Router>


  );
}

export default App;

