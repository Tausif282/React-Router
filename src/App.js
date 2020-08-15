import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contactus from "./Components/Contactus";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>REACT - ROUTING</h1>
      <BrowserRouter>
        <Navbar />
        <Route path="/home" component={Home} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/Contactus" component={Contactus} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
