import React from "react";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./componets/pages/Home";
import TravelPage from "./componets/pages/TravelPage";
import Countrypage from "./componets/pages/Countrypage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LastMinutePage from "./componets/pages/LastMinutePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}

function App() {
  return(
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/travel' Component={TravelPage} />
        <Route path="/:countryName" Component={Countrypage}/>
        <Route path="/LastMinute" Component={LastMinutePage}/>
      </Routes>
    </Router>

  )
}

export default App
