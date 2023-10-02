import React from 'react'
import Slider from '../Slider';
import Card from "../Card";
import Cardsm from "../Cardsm";
import Footer from "../Footer";
import Hotels from "../Hotels";
import Exotic from "../Exotic";
import LastMinuteBanner from '../LastMinuteBanner';

const Home = () => {
   const bgurl="https://wallpaperset.com/w/full/7/a/b/70196.jpg";
   const slides = [
    {
      place: "Zakhynthos",
      url: "https://i.content4travel.com/cms/img/u/kraj/1/zakynthos_0.jpg?version=230308-08"
    },
    {
      place: "Kreta",
      url: "https://i.wpimg.pl/O/1080x717/d.wpimg.pl/1007126061--1410299703/zakynthos%20sunweb.jpg"
    },
    {
      place: "Santorini",
      url: "https://www.greeka.com/photos/ionian/zakynthos/things-to-do/hero/zakynthos-things-to-do-1280.jpg"
    },
    {
      place: "Zakhynthos",
      url: "https://www.grecos.pl/-/media/grecos/przewodniki/zakynthos/grecos-zakynthos-029.ashx"
    },
  ];

  
  return (
   <div style={{backgroundImage: `url(${bgurl})`}} className="w-full h-full  bg-no-repeat" id="bgFull">
   <div className="flex flex-wrap place-content-evenly w-5/6 m-auto">
     <Card/>
   </div>
   <LastMinuteBanner/> 
   <div className="p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
     <Cardsm/>
   </div>   
   <Hotels/>  
   <Exotic/>
   <Slider slides={slides}/>
   <Footer/>
 </div>
  )
}

export default Home