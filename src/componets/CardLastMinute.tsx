import React from 'react'

interface Props{
   lastMinute: {
      dates: string;
      rate: number;
      departure: string;
      name: string;
      stars: number;
      url: string;
      country: string;
      slots: number;
      price: number;
  }[]
};
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



const CardLastMinute = ({lastMinute}:Props) => {
  return (
    <div className="w-full flex flex-wrap">
      {lastMinute.map((lastMinute,index)=>(
         <div key={index} className="w-2/3 lg:h-64 m-auto rounded-xl flex-wrap lg:inline-flex my-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="w-full h-44 lg:w-2/5 lg:h-full bg-cover rounded-xl" style={{backgroundImage:`url(${lastMinute.url})`}}>
               <div className="w-28 lg:mt-8 text-x bg-white rounded-r-xl font-semibold pl-1">LAST MINUTE</div>
            </div>
            <div className="w-full lg:w-2/5 p-4">
               <div className="w-full text-xl text-gray-700 ">{lastMinute.country}</div>
               <div className="text-2xl">{lastMinute.name}</div>
               <div className="inline-flex">{starGenerate(lastMinute.stars)}</div>
               <div className="py-2"><span className="font-bold text-lg text-white bg-blue-600 rounded-lg p-2">{lastMinute.rate}</span></div>
               <div>{rateHotel(lastMinute.rate)}</div>
               <div className="w-full inline-flex pt-4">
                  <span>Departure: {lastMinute.departure}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
               </div>
               <div className="w-full">{lastMinute.dates}</div>
            </div>
            <div className="w-full lg:w-1/5 p-4">
               <div className="inline-flex">
                  <span className="text-4xl text-gray-600 pr-2">{lastMinute.price}</span>
                  <div className="text-sm w-12">$ per person</div>  
               </div>
               <button className="border-2 border-gray-700 text-gray-700 text-2xl p-2 font-semibold lg:mt-20 mt-2 mb-4 rounded-lg hover:bg-gray-700 hover:text-white duration-300">Check offer</button>
               <div className="text-sm inline-flex">Only {lastMinute.slots} places avilable
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                  </svg>
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
               </svg>
            </div>
         </div>
      ))}
    </div>
  )
}

export default CardLastMinute