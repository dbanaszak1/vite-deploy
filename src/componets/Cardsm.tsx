import React from 'react'
import {Link} from 'react-router-dom'

const cardssm = [
   {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/97/4c/d1/20151030-095049-largejpg.jpg?w=700&h=500&s=1",
      place: "Turkey",
   },
   {
      url: "https://ocdn.eu/pulscms-transforms/1/GeOk9kqTURBXy81ZTRkNzZiMWJiM2YxZWZiZGNjNmNiYmI4YjhhMTQ1OC5qcGVnk5UDAMxazQvMzQaikwmmYmEzZThjBpMFzQSwzQJ23gABoTAB/kreta-grecja.jpg",
      place: "Croatia",
   },
   {
      url: "https://a.cdn-hotels.com/gdcs/production88/d986/94eba4c2-8704-478b-8bfc-093c73e8c1b4.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      place: "Greece",
   },
   {
      url: "https://kolemsietoczy.pl/wp-content/uploads/2017/11/Maroko-kasby-ksary-zabytki-architektura-co-zobaczyc.jpg",
      place: "Marocco",
   },
   {
      url: "https://www.national-geographic.pl/media/cache/big/uploads/media/default/0001/93/8f04d659ca43b2c1c94d2611a00f992f37af4d54.jpeg",
      place: "Albania",
   },
   {
      url: "https://www.egypttoursportal.com/images/2017/11/Egypt-History-Egypt-Tours-Portal.jpg",
      place: "Egypt",
   },
   {
      url: "https://wanderlustcrew.com/wp-content/uploads/2019/02/Best-Places-to-Visit-in-Italy-Feature-1100x788.jpg",
      place: "Italy",
   },
   {
      url: "https://a.cdn-hotels.com/gdcs/production113/d1893/32195160-9beb-11e8-be36-0242ac110002.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      place: "Spain",
   },
];

const Cardsm = () => {
  return (      
   <section className="w-5/6 lg:w-full max-w-[1280px] m-auto pt-12 mb-8">
      <div className="w-full m-auto">
         <h1 className="w-full text-3xl md:text-4xl py-5">Most popular directions this year!</h1>
         <h3 className="text-lg text-gray-500 ">Find your pefect place for holidays!</h3>         
      </div>
      <div className="w-full m-auto flex flex-wrap place-content-evenly">
         {cardssm.map((cardssm, index) => (
            <Link to={`../vite-deploy/${cardssm.place}`}>
               <div key={index} style={{backgroundImage: `url(${cardssm.url})`}} className="relative border-[1px] border-gray-400 w-[300px] h-72 brightness-80 hover:brightness-110 cursor-pointer content-center mt-4 rounded-lg bg-cover">
                  <h2 className="text-2xl bottom-5 left-5 absolute text-white uppercase font-bold">{cardssm.place}</h2>
               </div>
            </Link>
         ))}
      </div>
   </section>
  );
};

export default Cardsm