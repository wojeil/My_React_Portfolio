import React from 'react';
import ContactPage from "./pages/ContactPage";
// import Home from "./pages/Home";
import './ContactP.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      
    <div>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> */}
        <Route exact path="/contact" component={ContactPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>


  );
}

export default App;
