import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Search from "./pages/Search"
import Saved from "./pages/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}
export default App;
