import React from 'react'
interface Props{
   hotels:{price:string; url:string; name:string; stars:number; rate:number; ratecount:number;}[];
   country:string;
}
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

const Card1 = ({hotels, country}:Props) => {
  return (
   <div className="w-5/6 md:w-2/3 m-auto">
      <h1 className="text-4xl">Our actual offer:</h1>
      <h2 className="text-2xl text-gray-600">Hotels, beautiful places and more..</h2>
   {hotels.map((hotel, index) => (
    <div key={index} className="w-full md:h-64 rounded-xl md:inline-flex my-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div style={{backgroundImage: `url(${hotel.url})`}} className="w-full h-44 md:w-2/5 md:h-full bg-cover rounded-t-lg md:rounded-l-lg overflow-hidden"></div>
      <div className="w-full md:w-2/5 p-6 flex-row">
         <div className="w-full md:text-2xl text-gray-700 ">{country}</div>
         <div className="text-xl md:text-3xl">{hotel.name}</div>
         <div className="inline-flex">{starGenerate(hotel.stars)}</div>
         <div className="pt-2 md:pt-8 pb-2"><span className="font-bold text-lg text-white bg-blue-600 rounded-lg p-2">{hotel.rate}</span></div>
         <div>{rateHotel(hotel.rate)}</div>
         <div><span className="text-gray-700 text-xl">{hotel.ratecount}</span> opinions</div>
      </div>
      <div className="md:w-1/5 p-4 bg-blue-200 rounded-b-lg md:rounded-r-xl">
         <div className="inline-flex w-full">
            <span className="text-4xl text-gray-600 pr-2">{hotel.price}</span>
            <div className="text-sm w-12">$ per person</div>  
         </div>
         <button className="border-2 border-gray-700 text-gray-700 text-2xl p-2 font-semibold mt-4 md:mt-8 2xl:mt-20 mb-4 rounded-lg hover:bg-gray-700 hover:text-blue-200 duration-300">Check offer</button>
         <div className="text-sm inline-flex">Check dates and prices
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
            </svg>
         </div>
      </div>
    </div>
    ))}
    </div>
);
};
export default Card1