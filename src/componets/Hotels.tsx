import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from './Stars';

const Hotels = () => { 

  const hotel = [
    {
      group: 0,
      url:"https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
      rate: 8.4,
      ratecount: 946,
      name: "Cleopatra Hotel",
      stars: 4,
      price: 300,
      country:"Turkey",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStF4nEnpgPVHUDfhwqTCtLnlVpxL6ZwE2cRaQg7X6lrSZIg1P8w_CbbBGC-yo6nC_qXmY&usqp=CAU",
              "https://s.joinup.lt/uploads/hotel/41375/gallery/original/Alaiye-Kleopatra-Hotel4.jpg",
              "https://assets.onthebeach.co.uk/m/9c29db5c317812/Small-15A%20PUZZLE%20BAR"]
    },
    {
      group: 1,
      rate: 8.2,
      ratecount: 854,
      country: "Greece",
      name: "Royal Palace",
      stars: 4,
      price: 300,
      url: "https://thetravelshots.com/wp-content/uploads/2022/06/Best-Hotels-in-Santorini.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 0,
      rate: 9.6,
      ratecount: 1038,
      country: "Albania",
      name: "Atlantis hotel",
      stars: 5,
      price: 300,
      url: "https://thetourguy.com/wp-content/uploads/2021/12/Cavo-Tagoo.png",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group:0,
      rate: 8.7,
      ratecount: 214,
      country: "Marocco",
      name: "Mandarin Orintal",
      stars: 4,
      price: 300,
      url: "https://media.timeout.com/images/105252341/750/562/image.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 2,
      rate: 6.8,
      ratecount: 356,
      country: "Italy",
      name: "Rome Royal",
      stars: 3,
      price: 300,
      url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 1,
      rate: 9.7,
      ratecount: 356,
      country: "Italy",
      name: "Rome Royal",
      stars: 5,
      price: 300,
      url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 1,
      rate: 7.8,
      ratecount: 903,
      country: "Turkey",
      name: "City Hills",
      stars: 4,
      price: 300,
      url: "https://r.cdn.redgalaxy.com/http/o2/TUI/hotels/ADB11046/S17/6568556.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 2, 
      rate: 9.9,
      ratecount: 23,
      name: "Luxury Apartaments",
      stars: 5,
      url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
      country:"Spain",
      price: 300,
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 2,
      rate: 8.8,
      ratecount: 356,
      country: "Greece",
      price: 300,
      name: "Palm hotel",
      stars: 4,
      url: "https://images.r.pl/zdjecia/hotele/glob/480/creta-palm-hotel-and-apartments_grecja_kreta-chania_480_172231_438978_600x600.jpg",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group: 2,
      rate: 9.6,
      ratecount: 106,
      name: "Zante Maris Suites",
      stars: 5,
      url: "https://zante-maris-suites-tsilivi.booked.com.pl/data/Photos/OriginalPhoto/8943/894392/894392953/Zante-Maris-Suites-Adults-Only-Tsilivi-Exterior.JPEG",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"],
      country: "Greece",
      price: 300,
    },
    {
      group: 1,
      rate: 9.4,
      ratecount: 756,
      country: "Egypt",
      price: 300,
      name: "Alladin Hurgada",
      stars: 5,
      url: "https://premium-blue-lagoon-hotel-hurghada.booked.com.pl/data/Photos/OriginalPhoto/12771/1277135/1277135320/Royal-Lagoons-Resort-Aqua-Park-Families-And-Couples-Only-Hurghada-Exterior.JPEG",
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
    },
    {
      group:0,
      rate: 8.4,
      ratecount: 532,
      name: "Park Hotel",
      stars: 4,
      url: "https://assets.sunshine.co.uk/m/6c3655899181cae/Small-M20_014_00002",
      country:"Croatia",
      price: 300,
      slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
              "https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg"]
     },
  ];
 
  const rateHotel =(rate: number)=>{
    if(rate>=9)
    return(<span>Magnificent</span>)
    if(rate>=8)
    return(<span>Very good</span>)
    if(rate>=6)
    return(<span>Good</span>)
    if(rate>=4)
    return(<span>Middling</span>)
    else
    return(<span>Poor</span>)
  };
  
  const[currentFilter, setCurrentFilter]=useState(0);

  return (
    <div className="mb-10 max-w-[1280px] m-auto border-t-2 border-gray-200">    
      <div className="w-full m-auto mt-12 mb-5">    
        <div className="text-4xl px-4 mx-2">Hotels</div>
        <div className="text-xl p-4 ml-2">We have 
          <span className="text-gray-600 font-semibold"> 102466 </span> 
          <span>opinions added!</span>
        </div>
        <div className='text-sm md:text-lg flex place-content-evenly md:place-content-start'>
          <button id="button1" onClick={()=>setCurrentFilter(0)} className={0 === currentFilter ? "p-2 m-1 md:m-4 rounded-full border-[1px] border-blue-600" :"p-2 m-1 md:m-4 rounded-full border-[1px] border-gray-400 hover:border-blue-600" }>Most popular</button>
          <button id="button2" onClick={()=>setCurrentFilter(1)} className={1 === currentFilter ? "p-2 m-1 md:m-4 rounded-full border-[1px] border-blue-600" :"p-2 m-1 md:m-4 rounded-full border-[1px] border-gray-400 hover:border-blue-600" }>For families</button>
          <button id="button3" onClick={()=>setCurrentFilter(2)} className={2 === currentFilter ? "p-2 m-1 md:m-4 rounded-full border-[1px] border-blue-600" :"p-2 m-1 md:m-4 rounded-full border-[1px] border-gray-400 hover:border-blue-600" }>For peace lovers</button>          
        </div>
      </div>
        <div className=" m-auto flex flex-wrap place-content-evenly">
          {hotel.map((hotel, index) => (
            <div key={index} className = {hotel.group === currentFilter ?"h-[420px] w-[280px] border-[1px] border-gray-400 mb-6 md:mb-0 rounded-lg":"hidden"  }>
              <Link key={index} to={`../vite-deploy/Hotel/${hotel.name}`} state={{hotel: hotel}}>
                <div style={{backgroundImage: `url(${hotel.url})`}} className="h-[200px]  brightness-80 hover:brightness-110 cursor-pointer rounded-t-md content-center bg-cover">
                </div>              
              </Link>
              <div className="w-full p-4">
                <div className="text-sm text-gray-600">{hotel.country}</div>
                <div className="text-xl">{hotel.name}</div>
                <div className="inline-flex"><Stars star={hotel.stars}/></div>       
              </div>
              <div className="w-full p-4 top-0">
                <div><span className="font-bold text-lg text-white bg-blue-600 rounded-lg p-2">{hotel.rate}</span></div>
                <div className="text-sm text-gray-600 pt-2">{hotel.ratecount} opinions</div>
                <div>{rateHotel(hotel.rate)}</div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
};

export default Hotels;
