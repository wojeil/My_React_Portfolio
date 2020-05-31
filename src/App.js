import React from 'react';
import ContactPage from "./pages/ContactPage";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      
    <div>
      <Switch>
        <Route exact path="/my-portfolio-with-react" component={Home} />
        <Route exact path="/my-portfolio-with-react/about" component={About} />
        <Route path="/my-portfolio-with-react/contact" component={ContactPage} />
        <Route path="/my-portfolio-with-react/portfolio" component={Portfolio} />
        
      </Switch>
    </div>
  </Router>


  );
}

export default App;

