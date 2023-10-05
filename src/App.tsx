import React from "react";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./componets/pages/Home";
import TravelPage from "./componets/pages/TravelPage";
import Countrypage from "./componets/pages/Countrypage";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LastMinutePage from "./componets/pages/LastMinutePage";
import AboutPage from "./componets/pages/AboutPage";
import HotelOffer from "./componets/pages/HotelOffer";

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
        <Route path='/vite-deploy/home' Component={Home} />
        <Route path='/vite-deploy/travel' Component={TravelPage} />        
        <Route path="/vite-deploy/about" Component={AboutPage}/>        
        <Route path="/vite-deploy/:countryName" Component={Countrypage}/>
        <Route path="/vite-deploy/LastMinute" Component={LastMinutePage}/>
        <Route path="/vite-deploy/Hotel/:name" Component={HotelOffer}/>
      </Routes>
    </Router>

  )
}

export default App
