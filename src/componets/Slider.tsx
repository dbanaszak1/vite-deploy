import React, { useState } from 'react'

interface Props{
  slides:{place:string; url:string;}[];
}

function Slider({slides}: Props) {

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
      <div className="w-full text-4xl text-center mt-16">Travel to <span className="text-gray-600  font-serif">{slides[currentIndex].place}</span> </div>
      <div className="max-w-sm md:max-w-lg lg:max-w-[1200px] h-[680px] relative mb-20 p-10 px-4 m-auto">
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-full w-full bg-center bg-cover duration-500 rounded-2xl"
        >
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