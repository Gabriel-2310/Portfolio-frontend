import React from "react";
import { Route } from "react-router-dom";
import About from "./Components/About/index";
import Contact from "./Components/Contact/index";
import Proyects from "./Components/Proyects/index";
import Welcome from "./Components/Welcome/index";
import Navbar from "./Components/Navbar";
import "./app.css";


function App() {
  return (
    <React.Fragment>
      <Route path={"/"} component={Navbar}/>
      <Route path={"/about"} component={About}/>
      <Route path={"/contact"} component={Contact}/>
      <Route path={"/proyects"} component={Proyects}/>
      <Route exact path={"/welcom"} component={Welcome}/>      
    </React.Fragment>
  );
}

export default App;
