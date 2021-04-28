
import React from "react";
import axios from "axios";

import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav";
import Research from "./components/layout/nav/research/Research";
//import Home from "./components/layout/nav/home/Home";
import Explore from "./components/layout/section_explore/explore/Explore";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>        
        <Nav />
        <main className="container m-5">   
          <Switch>
            <Route path="/home">
              <Explore />
            </Route>
            <Route path="/research">
              <Research />
            </Route>            
                  
            <Explore />     
            
            {/* <Route path="/films">
              <Films />
            </Route>
            <Route path="/planetes">
              <Planetes />
            </Route>
            <Route path="/personnages">
              <Personnages />
            </Route>
            <Route path="/especes">
              <Especes />
            </Route>
            <Route path="/vehicules">
              <Vehicules />
            </Route>
            <Route path="/vaisseaux">
              <Vaisseaux />
            </Route>            */}
            
          </Switch>
        </main>
      </Router>
      <Footer />
   </div>
  );
}

export default App;
