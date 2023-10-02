import React from 'react'
import { useParams } from 'react-router-dom';
import Card1 from '../CardCountryPage';
import Footer from '../Footer';
import ErrorPage from './ErrorPage';

const travelNotes = [
   {
     country: "Croatia",
     description: "Croatia is a beautiful country on the Adriatic coast. It is known for its charming coastal towns, stunning beaches, and delicious Mediterranean cuisine.",
     imageUrl: "https://worldstrides.com/wp-content/uploads/2018/09/Dubrovnik-Croatia.jpg",
     hotels: [{
      rate: 8.4,
      ratecount: 532,
      name: "Park Hotel",
      stars: 4,
      url: "https://assets.sunshine.co.uk/m/6c3655899181cae/Small-M20_014_00002",
      price:"349"
     },{
      rate: 9.4,
      ratecount: 282,
      name: "Croatia Cavtat",
      stars: 5,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/6b/0f/hotel-croatia-cavtat.jpg?w=700&h=-1&s=1",
      price:"549"
     }
     ],
   },
   {
     country: "Egypt",
     description: "Egypt is a fascinating country with a rich history and culture. It is famous for its ancient pyramids, the magnificent Nile River, and beautiful beaches along the Red Sea.",
     imageUrl: "https://pelorusx.com/wp-content/uploads/2020/09/pyramids-camels-egypt.jpg",
     hotels: [{
      rate: 9.2,
      ratecount: 255,
      name: "Alladin Hurgada",
      stars: 5,
      price:"599",
      url: "https://premium-blue-lagoon-hotel-hurghada.booked.com.pl/data/Photos/OriginalPhoto/12771/1277135/1277135320/Royal-Lagoons-Resort-Aqua-Park-Families-And-Couples-Only-Hurghada-Exterior.JPEG" 
      },
      {
      rate: 8.2,
      ratecount: 344,
      name: "Cair Royal",
      stars: 5,
      price:"908",
      url: "https://theluxuryeditor.com/wp-content/uploads/2018/09/22449425.jpg" 
      },
      {
      rate: 9.6,
      ratecount: 306,
      name: "Allibaba Hurgada Hotel",
      stars: 4,
      price:"699",
      url: "https://traveller.easyjet.com/public/uploads/Egypy%20hotels_Sharm_Charmillion%20Aqua%20Park.jpg" 
      }
     ],
   },
   {
     country: "Turkey",
     description: "Turkey is a country that bridges the East and West. It is known for its culture, cuisine, and beautiful Mediterranean beaches.",
     imageUrl: "https://img.itinari.com/activity/images/original/af3f011b-2f5d-47cd-ba27-8ca65ca84d73-istock-588968004.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=991ef97f661cb4250f2471ee68f049f6",
     hotels: [{
         url:"https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
         rate: 8.4,
         ratecount: 946,
         name: "Cleopatra Hotel",
         stars: 4,
         price:"399"
         },
         {
         url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/365840754.jpg?k=0fad068f6c619371192604a9dbec452fc6e2041fe9016b19f4c86a19d347b165&o=&hp=1",
         rate: 9.4,
         ratecount: 356,
         name: "Alladin Hotel",
         stars: 5,
         price:"560"
         }
     ],
   },
   {
     country: "Greece",
     description: "Greece is the birthplace of democracy and mythology. The country offers beautiful islands, stunning architecture, and delicious cuisine.",
     imageUrl: "https://travelstory.pl/wp-content/uploads/2020/09/travelstory.pl-zakynthos-46-scaled.jpg",
     hotels: [{
      rate: 9.4,
      ratecount: 356,
      name: "Atlantis Hotel",
      stars: 4,
      url: "https://i.wakacje.pl/no-index/hotel/grecja/admiral-argassi-obiekt-basen-826730734-800-600.jpg",
      price:"529"
      },
      {
         rate: 9.6,
         ratecount: 106,
         name: "Zante Maris Suites",
         stars: 5,
         url: "https://zante-maris-suites-tsilivi.booked.com.pl/data/Photos/OriginalPhoto/8943/894392/894392953/Zante-Maris-Suites-Adults-Only-Tsilivi-Exterior.JPEG",
         price:"1025"
      }
     ],
   },
   {
     country: "Italy",
     description: "Italy is a country of art, fashion, and delicious cuisine. It is famous for cities like Rome, Florence, and Venice.",
     imageUrl: "https://bynder.onthebeach.co.uk/m/37372ee84dbf6055/original/Amalfi-Italy.jpg",
     hotels: [{
      rate: 7.4,
      ratecount: 146,
      name: "Rome Central",
      stars: 3,
      url: "https://cf.bstatic.com/xdata/images/hotel/max500/426584726.jpg?k=1fbb6e4fe60fbbeaf8615e6a8940ea63e29ee353c745495a0ebfc4f78145af48&o=&hp=1",
      price:"340"
      },
      {
         rate: 6.8,
         ratecount: 206,
         country: "Italy",
         name: "Rome Royal",
         stars: 4,
         url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
         price:"268"
      },
      {
         rate: 9.2,
         ratecount: 223,
         country: "Italy",
         name: "Butique Cave Hotel",
         stars: 5,
         url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/88542794.jpg?k=3bbf83f185d7ffed136d7e12636aeff36c21b156760a9d5ed158c62ffbc9636a&o=&hp=1",
         price:"960"
      }
     ],
   },
   {
     country: "Albania",
     description: "Albania is a country of undiscovered beauty. It is known for its pristine Adriatic coastline and unique culture.",
     imageUrl: "https://lp-cms-production.imgix.net/features/2015/05/shutterstock_650401288-df2c79d3bbf2.jpg?auto=format&q=75&w=1920",
     hotels: [{
      rate: 9.1,
      ratecount: 32,
      name: "Gold Albania Resort",
      stars: 5,
      url: "https://elitetravel-albania.com/wp-content/uploads/2021/07/regina-blu2-1024x906.jpg",
      price:"1090"
      },
      {
      rate: 5.4,
      ratecount: 105,
      name: "Amr hotel",
      stars: 3,
      url: "https://i.wakacje.pl/no-index/hotel/albania/amr-1107116357-original.jpg",
      price:"230"
      },
      {
      rate: 8.8,
      ratecount: 140,
      name: "Grand Hotel Aman",
      stars: 5,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325954928.jpg?k=75ab53619671cf4bd7fac8913c794e901cce5245e9a87395ccbcd8787a166f06&o=&hp=1",
      price:"709"
      }
     ],
   },
   {
     country: "Marocco",
     description: "Morocco is a land of contrasts, from the sands of the Sahara to the Atlas Mountains. It is famous for its colorful bazaars and mysterious cities.",
     imageUrl: "https://blogimages.musement.com/2018/06/best-beaches-in-morocco-jpg_header-71380.jpeg",
     hotels: [{
      rate: 8.7,
      ratecount: 214,
      name: "Mandarin Orintal",
      stars: 4,
      url: "https://media.timeout.com/images/105252341/750/562/image.jpg",
      price:"578"
      },
      {
      rate: 7.8,
      ratecount: 324,
      name: "Sirayane hotel",
      stars: 5,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/c7/79/riad-dar-anika.jpg?w=1200&h=-1&s=1",
      price:"908"
      },
      {
      rate: 9.5,
      ratecount: 93,
      name: "Amanjenna resort",
      stars: 4,
      url: "https://www.hotelswithprivatepool.com/Images/marrakech-morocco-hotels-with-private-pool-9.jpg",
      price:"600"
      }
     ],
   },
   {
     country: "Spain",
     description: "Spain is the land of flamenco, bullfighting, and beautiful beaches. It is known for its cultural heritage and hospitality.",
     imageUrl: "https://www.fodors.com/wp-content/uploads/2019/10/BestBeachesinSpain__HERO_macarella-y-macarelleta.jpg",
     hotels: [{
      rate: 9.2,
      ratecount: 109,
      name: "Barcelona Royal",
      stars: 4,
      url: "https://www.touropia.com/gfx/b/2016/02/Hotel_Alfonso_XIII.jpg",
      price:"349"
       },
       {
      rate: 7.8,
      ratecount: 205,
      name: "On The Beach Hotel",
      stars: 4,
      url: "https://assets.onthebeach.co.uk/m/17deb1c9d160d0eb/Pod-hotelimages-mercury-hotel-283799-1",
      price:"502"
       },
       {
      rate: 9.9,
      ratecount: 23,
      name: "Luxury Apartaments",
      stars: 5,
      url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
      price:"1200"
       }
     ],
   },
];



const Countrypage = () => {
let {countryName} = useParams();
const name = countryName || 'else';

const idxChecker = (name:string) => {
  if(name=="Croatia") return(0);
  if(name=="Egypt") return(1);
  if(name=="Turkey") return(2);
  if(name=="Greece") return(3);
  if(name=="Italy") return(4);
  if(name=="Albania") return(5);
  if(name=="Marocco") return(6);
  if(name=="Spain") return(7);
  else{
    return(404)
  }
}
var idx=idxChecker(name)

if(idx!=404){
  return (
    <div>
      <div style={{backgroundImage: `url(${travelNotes[idx].imageUrl})`}} className="w-full mb-10 h-[600px] bg-center bg-fixed shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
         <div className="w-full absolute top-[30%] bg-black bg-opacity-30">
            <h1 className="text-4xl text-white font-serif text-center w-full p-6 ">Adveture in {countryName} awaits!</h1>
            <div className="w-2/3 xl:w-1/3 text-l xl:text-xl text-white pb-6 m-auto text-center">{travelNotes[idx].description}</div>
         </div>
      </div>
     <Card1 hotels={travelNotes[idx].hotels} country={name}/>
     <Footer/>
    </div>
  )
}
else{
  return(
    <ErrorPage/>
  )
}
}

export default Countrypage