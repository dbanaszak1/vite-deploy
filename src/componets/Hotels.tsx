import React from 'react'
import { useState } from 'react'

const Hotels = () => { 

  const hotel = [
    {
      group: 0,
      url:"https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
      rate: 8.4,
      ratecount: 946,
      name: "Cleopatra Hotel",
      stars: 4,
      country:"Turkey"
    },
    {
      group: 1,
      rate: 8.2,
      ratecount: 854,
      country: "Greece",
      name: "Royal Palace",
      stars: 4,
      url: "https://thetravelshots.com/wp-content/uploads/2022/06/Best-Hotels-in-Santorini.jpg"
    },
    {
      group: 0,
      rate: 9.6,
      ratecount: 1038,
      country: "Albania",
      name: "Atlantis hotel",
      stars: 5,
      url: "https://thetourguy.com/wp-content/uploads/2021/12/Cavo-Tagoo.png"
    },
    {
      group:0,
      rate: 8.7,
      ratecount: 214,
      country: "Marocco",
      name: "Mandarin Orintal",
      stars: 4,
      url: "https://media.timeout.com/images/105252341/750/562/image.jpg"
    },
    {
      group: 2,
      rate: 6.8,
      ratecount: 356,
      country: "Italy",
      name: "Rome Royal",
      stars: 3,
      url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg"
    },
    {
      group: 1,
      rate: 9.7,
      ratecount: 356,
      country: "Italy",
      name: "Rome Royal",
      stars: 5,
      url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg"
    },
    {
      group: 1,
      rate: 7.8,
      ratecount: 903,
      country: "Turkey",
      name: "City Hills",
      stars: 4,
      url: "https://r.cdn.redgalaxy.com/http/o2/TUI/hotels/ADB11046/S17/6568556.jpg"
    },
    {
      group: 2, 
      rate: 9.9,
      ratecount: 23,
      name: "Luxury Apartaments",
      stars: 5,
      url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
      country:"Spain"
    },
    {
      group: 2,
      rate: 8.8,
      ratecount: 356,
      country: "Greece",
      name: "Palm hotel",
      stars: 4,
      url: "https://images.r.pl/zdjecia/hotele/glob/480/creta-palm-hotel-and-apartments_grecja_kreta-chania_480_172231_438978_600x600.jpg"
    },
    {
      group: 2,
      rate: 9.6,
      ratecount: 106,
      name: "Zante Maris Suites",
      stars: 5,
      url: "https://zante-maris-suites-tsilivi.booked.com.pl/data/Photos/OriginalPhoto/8943/894392/894392953/Zante-Maris-Suites-Adults-Only-Tsilivi-Exterior.JPEG",
      country: "Greece",
    },
    {
      group: 1,
      rate: 9.4,
      ratecount: 756,
      country: "Egypt",
      name: "Alladin Hurgada",
      stars: 5,
      url: "https://premium-blue-lagoon-hotel-hurghada.booked.com.pl/data/Photos/OriginalPhoto/12771/1277135/1277135320/Royal-Lagoons-Resort-Aqua-Park-Families-And-Couples-Only-Hurghada-Exterior.JPEG"
    },
    {
      group:0,
      rate: 8.4,
      ratecount: 532,
      name: "Park Hotel",
      stars: 4,
      url: "https://assets.sunshine.co.uk/m/6c3655899181cae/Small-M20_014_00002",
      country:"Croatia"
     },
  ];
 
  const starGenerate =(star: number)=>{
    const fullstar = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>);
    const starFillNone=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>);
  
    if(star==0)
    return(<>{starFillNone}{starFillNone}{starFillNone}{starFillNone}{starFillNone}</>);
    if(star==1)
    return(<>{fullstar}{starFillNone}{starFillNone}{starFillNone}{starFillNone}</>);
    if(star==2)
    return(<>{fullstar}{fullstar}{starFillNone}{starFillNone}{starFillNone}</>);
    if(star==3)
    return(<>{fullstar}{fullstar}{fullstar}{starFillNone}{starFillNone}</>);
    if(star==4)
    return(<>{fullstar}{fullstar}{fullstar}{fullstar}{starFillNone}</>);
    if(star==5)
    return(<>{fullstar}{fullstar}{fullstar}{fullstar}{fullstar}</>);
  };
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
    <div className="mb-10">    
      <div className="w-full md:w-5/6 3xl:w-2/3 m-auto mt-10 p-3">    
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
        <div className="w-5/6 m-auto flex flex-wrap place-content-evenly">
          {hotel.map((hotel, index) => (
            <div key={index} className = {hotel.group === currentFilter ?"h-[420px] w-[280px] border-[1px] border-gray-400 mb-6 md:mb-0 rounded-lg":"hidden"  }>
              <div style={{backgroundImage: `url(${hotel.url})`}} className="h-[200px]  brightness-80 hover:brightness-110 cursor-pointer rounded-t-md content-center bg-cover">
              </div>
              <div className="w-full p-4">
                <div className="text-sm text-gray-600">{hotel.country}</div>
                <div className="text-xl">{hotel.name}</div>
                <div className="inline-flex">{starGenerate(hotel.stars)}</div>       
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
