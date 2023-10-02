import React from 'react'

const cards = [
      {
         url: "https://ocdn.eu/pulscms-transforms/1/GeOk9kqTURBXy81ZTRkNzZiMWJiM2YxZWZiZGNjNmNiYmI4YjhhMTQ1OC5qcGVnk5UDAMxazQvMzQaikwmmYmEzZThjBpMFzQSwzQJ23gABoTAB/kreta-grecja.jpg",
         place: "Greece, Kreta",
         visitors: 1203,
      },
      {
         url: "https://i.content4travel.com/cms/img/u/kraj/1/kusadasi_0.jpg?version=1",
         place: "Turkey, Kusadasi",
         visitors: 2062
      },
      {
         url: "https://www.coraltravel.pl/img/region/11/shutterstock_295579874-ANTALYA.jpg",
         place: "Turkey, Antalya",
         visitors: 1678
      },  
      {
         url: "https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg",
         place: "Italy, Venice",
         visitors: 1440
      },  
   ];


const Card = () => {
  return (
    <div className='w-5/6 md:w-full 3xl:w-2/3 md:px-6 flex flex-wrap place-content-evenly '>
      <h1 className="text-3xl md:text-4xl w-full mt-10 md:px-10">Recomended travel destinations 2023</h1>
      <h2 className='text-lg text-gray-500 w-full md:px-10'>Choose the place recomended by other turists!</h2>
      {cards.map((card, index) => (
        <div key={index} className="w-[520px] rounded-lg bg-white pt-2 my-4 border-2 border-gray-400">
            <div className="flex-row text-gray-700 ">
               <div className='inline-flex w-full py-3 px-5'>
                  <svg className="hover:rotate-180 duration-500 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                  <h2 className="text-lg md:text-2xl font-semibold mx-4">
                     {card.place}
                  </h2>             
               </div>
               <div className="w-full px-5 text-gray-400 text-xl">{card.visitors} visitors this year!</div>
               <div className="w-full text-lg px-5">Many hotels to choose</div> 
               <div className="inline-flex group px-5 py-3">
                  <svg className="group-hover:translate-x-12 duration-200 w-10 h-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  <span className="mx-4 text-lg md:text-2xl group-hover:translate-x-10 duration-300"> Buy your ticket!</span>               
               </div>
            </div>
          <img src={card.url} className="w-[520px] h-[180px] sm:h-[310px] rounded-b-lg brightness-80 hover:brightness-110 cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></img>
        </div>
      ))}
    </div>
  );
};

export default Card;
