import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Dataview from "./pages/Dataview";
import Signup from "./pages/Signup";
import Help from "./pages/Help";
import Search from "./pages/Search";
import ResetPassword from "./pages/ResetPassword";
import map from "./pages/map";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/services" component={Services} />
          <Route path="/dataview" component={Dataview} />
          <Route path="/signup" component={Signup} />
          
          <Route path="/help" component={Help} />
          <Route path="/Search" component={Search} />
          <Route path="/ResetPassword" component={ResetPassword} />
          <Route path="/map" component={map} />
        </Switch>
      </Router>
    </>
   
  );
}

export default App;
