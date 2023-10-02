import React from 'react'
import CardLastMinute from '../CardLastMinute';
import Footer from '../Footer';

const lastMinuteDb = [
  {
    dates: "10.07.2023-17.07.2023", 
    rate: 9.9,
    departure: "Wroclaw",
    name: "Luxury Apartaments",
    stars: 5,
    url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
    country:"Spain",
    slots: 2,
    price: 700, 
  },
  {
    dates: "10.07.2023-17.07.2023", 
    departure: "Warsaw",
    rate: 8.8,
    ratecount: 356,
    country: "Greece",
    name: "Palm hotel",
    stars: 4,
    url: "https://images.r.pl/zdjecia/hotele/glob/480/creta-palm-hotel-and-apartments_grecja_kreta-chania_480_172231_438978_600x600.jpg",
    price: 432, 
    slots:4,
  },
  {
    dates: "10.07.2023-17.07.2023", 
    rate: 9.9,
    departure: "Wroclaw",
    name: "Luxury Apartaments",
    stars: 5,
    url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
    country:"Spain",
    slots: 4,
    price: 300, 
  },
];

const ScrollToContent=()=>{
  window.scrollTo({
    top:680,
    behavior: "smooth"
  })
}

const bgImage="https://fly.pl/wp-content/uploads/2017/04/Tajlandia-Zima.jpg"
const LastMinutePage = () => {
  return (
   <>
      <div style={{backgroundImage: `url(${bgImage})`}} className="w-full h-[680px] bg-fixed flex justify-center items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div>
          <h1 className="text-6xl text-white w-full text-center p-4 font-bold">Adventure awaits!</h1>
          <div className="flex justify-center">
            <button onClick={ScrollToContent} className="border-4 border-white text-white p-3 text-2xl font-semibold hover:bg-white hover:text-black duration-300">GET STARTED</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className='w-2/3 m-auto text-4xl pt-10 pb-4 font-semibold text-center'>Find your perfect place for a better price!</div>
        <CardLastMinute lastMinute={lastMinuteDb}/>
      </div> 
      <Footer/>
   </>
  )
}

export default LastMinutePage