import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Index from "./pages/Index";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </Router>
  );
}

export default App;
