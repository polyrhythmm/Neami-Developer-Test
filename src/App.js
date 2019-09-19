import React from 'react'; 
import './App.css';
import Login from './components/Login';
import Logged from './components/Logged';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
    return (
    <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/logged" component={Logged} />
        </div>
      </Router>
  );
}

export default App;
