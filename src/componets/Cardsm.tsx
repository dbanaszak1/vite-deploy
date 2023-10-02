import React from 'react'
import {Link} from 'react-router-dom'

const cardssm = [
   {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/97/4c/d1/20151030-095049-largejpg.jpg?w=700&h=500&s=1",
      place: "Turkey",
      price:"749"
   },
   {
      url: "https://ocdn.eu/pulscms-transforms/1/GeOk9kqTURBXy81ZTRkNzZiMWJiM2YxZWZiZGNjNmNiYmI4YjhhMTQ1OC5qcGVnk5UDAMxazQvMzQaikwmmYmEzZThjBpMFzQSwzQJ23gABoTAB/kreta-grecja.jpg",
      place: "Croatia",
      price:"699"
   },
   {
      url: "https://a.cdn-hotels.com/gdcs/production88/d986/94eba4c2-8704-478b-8bfc-093c73e8c1b4.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      place: "Greece",
      price:"499",
      link:"/greece"
   },
   {
      url: "https://kolemsietoczy.pl/wp-content/uploads/2017/11/Maroko-kasby-ksary-zabytki-architektura-co-zobaczyc.jpg",
      place: "Marocco",
      price:"799"
   },
   {
      url: "https://www.national-geographic.pl/media/cache/big/uploads/media/default/0001/93/8f04d659ca43b2c1c94d2611a00f992f37af4d54.jpeg",
      place: "Albania",
      price:"749"
   },
   {
      url: "https://www.egypttoursportal.com/images/2017/11/Egypt-History-Egypt-Tours-Portal.jpg",
      place: "Egypt",
      price:"699"
   },
   {
      url: "https://wanderlustcrew.com/wp-content/uploads/2019/02/Best-Places-to-Visit-in-Italy-Feature-1100x788.jpg",
      place: "Italy",
      price:"499"
   },
   {
      url: "https://a.cdn-hotels.com/gdcs/production113/d1893/32195160-9beb-11e8-be36-0242ac110002.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      place: "Spain",
      price:"799"
   },
];

const Cardsm = () => {
  return (      
   <>
      <div className="w-full md:w-5/6 m-auto">
         <h1 className="w-full md:px-8 text-3xl md:text-4xl my-5">Most popular directions this year!</h1>
         <h3 className="text-lg text-gray-500 md:px-8">Find your pefect place for holidays!</h3>         
      </div>
      <div className="w-full md:w-5/6 3xl:w-2/3 px-10 m-auto flex flex-wrap place-content-evenly">
         {cardssm.map((cardssm, index) => (
            <Link to={`../vite-deploy/${cardssm.place}`}>
               <div key={index} style={{backgroundImage: `url(${cardssm.url})`}} className="border-[1px] border-gray-400 w-64 h-64 brightness-80 hover:brightness-110 cursor-pointer content-center my-5 rounded-lg bg-cover">
                  <h2 className="text-2xl text-center text-white">{cardssm.place}</h2>
                  <div className="bg-black bg-opacity-30 text-black w-full text-xl text-center items-center content-center">
                     <span className="text-white opacity-100">Best price: {cardssm.price }$</span>
                  </div>
               </div>
            </Link>
         ))}

         <div className="w-full flex justify-center">
            <button className="border-2 border-gray-700 text-gray-700 text-2xl p-2 font-semibold mb-4 rounded-lg hover:bg-gray-700 hover:text-white duration-300">Check full offer</button>  
         </div>
      </div>
   </>
  );
};

export default Cardsm