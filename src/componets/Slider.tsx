import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const bgurl="https://wallpaperset.com/w/full/7/a/b/70196.jpg";
const slides = [
  {
   text1: "TOP DIRECTION",
   text2:"Egypt - Sun, sea, piramids and more",
   text3:"Many dates avilable",
   text4:"Insurance free only this month",
   buttontext:"CHECK HERE",
   link:"Egypt",
   url: "https://czasnaegipt.pl/wp-content/uploads/2022/05/luksor-czas-na-egipt.jpg"
 },
 {
   text1: "TOP DIRECTION",
   text2:"Greece - your paradise island",
   text3:"PRE-SALE for 2024",
   text4:"Final price guarantee",
   buttontext:"MAKE YOUR RESERVATION",
   link:"Greece",
   url: "https://i.content4travel.com/cms/img/u/kraj/1/zakynthos_0.jpg?version=230308-08"
 },
 {
   text1: "TOP EXOTIC",
   text2:"Zanzibar - time for exotic adventure",
   text3:"Best prices guaranteed",
   text4:"Many flight possibilities",
   buttontext:"START YOUR ADVENTURE",
   link:"Zanzibar",
   url: "https://www.andbeyond.com/wp-content/uploads/sites/5/aerial-view-of-zanzibar-island.jpg"
 },
 {
   text1: "LAST MINUTE",
   text2:"Greece, Turkey, Spain, Cropatia and more",
   text3:"Cheapest prices guaranteed",
   text4:"Many dates avilable",
   buttontext:"CHECK HERE",
   link:"LastMinute",
   url: "https://t24hs.com/wp-content/uploads/2022/12/eb93c227-1d86-4d1d-a1d9-a7d18ad134b2.png"
 },

];

function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    if (currentIndex === 0)
      setCurrentIndex(3);
    else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const next = () => {
    if (currentIndex === 3)
      setCurrentIndex(0);
    else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="max-w-sm md:max-w-lg lg:max-w-[1240px] h-[680px] relative mb-20 p-10 px-4 m-auto">
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-full w-full bg-center bg-cover duration-500 rounded-2xl"
        >
          <div className='absolute top-[15%] left-[10%]'>
            <span className='bg-blue-500 font-bold text-md p-1 text-white'>{slides[currentIndex].text1}</span>
            <div className='text-4xl font-semibold text-blue-100'>{slides[currentIndex].text2}</div>
            <div className="text-2xl font-semibold text-white">{slides[currentIndex].text3}</div>
            <div className="text-lg font-semibold text-white">{slides[currentIndex].text4}</div>
            <Link to={`../vite-deploy/${slides[currentIndex].link}`}>
              <button className="border-2 border-white text-white text-2xl p-1 font-bold mt-2 rounded-lg hover:bg-white hover:text-blue-500 duration-300">
                  {slides[currentIndex].buttontext}
              </button>
            </Link>
          </div>
          <div className="text-white text-4xl absolute top-[50%] right-[95%] translate-x-[10px] bg-black/20 rounded-full cursor-pointer"
            onClick={() => prev()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="text-white text-4xl absolute top-[50%] left-[95%] -translate-x-[10px] bg-black/20 rounded-full cursor-pointer" onClick={() => next()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <div className={currentIndex === 0 ? "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[35%]" : "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-white absolute bottom-14 left-[35%]"}></div>
          <div className={currentIndex === 1 ? "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[43%]" : "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-white absolute bottom-14 left-[43%]"}></div>
          <div className={currentIndex === 2 ? "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[51%]" : "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-white absolute bottom-14 left-[51%]"}></div>
          <div className={currentIndex === 3 ? "w-[20px] lg:w-[80px] h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[59%]" : "w-[20px] xl:w-[80px] h-[3px] rounded-xl bg-white absolute bottom-14 left-[59%]"}></div>

        </div>
      </div>
    </>

  );
}

export default Slider