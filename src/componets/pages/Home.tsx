import React from 'react'
import Slider from '../Slider';
import Cardsm from "../Cardsm";
import Footer from "../Footer";
import Hotels from "../Hotels";
import Exotic from "../Exotic";
import LastMinuteBanner from '../LastMinuteBanner';
import RecommendedDest from '../RecommendedDest';

const Home = () => {
   const bgurl="https://wallpaperset.com/w/full/7/a/b/70196.jpg";


  
  return (
   <div style={{backgroundImage: `url(${bgurl})`}} className="w-full h-full bg-no-repeat">
   <Cardsm/>
   <LastMinuteBanner/>
   <RecommendedDest/>
   <Hotels/>  
   <Exotic/>
   <Slider/>
   <Footer/>
 </div>
  )
}

export default Home