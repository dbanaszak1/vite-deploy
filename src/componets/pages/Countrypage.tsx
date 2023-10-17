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
      price:"349",
      slides:["https://assets.sunshine.co.uk/m/6c3655899181cae/Small-M20_014_00002",
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/356739393.jpg?k=199bc0788c2db9941328b523c18c9f82c11136f395397b4d740b5a759dbaf856&o=&hp=1",
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
              "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="]
     },{
      rate: 9.4,
      ratecount: 282,
      name: "Croatia Cavtat",
      stars: 5,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/6b/0f/hotel-croatia-cavtat.jpg?w=700&h=-1&s=1",
      price:"549",
      slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/6b/0f/hotel-croatia-cavtat.jpg?w=700&h=-1&s=1","https://assets.sunshine.co.uk/m/6c3655899181cae/Small-M20_014_00002",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/356739393.jpg?k=199bc0788c2db9941328b523c18c9f82c11136f395397b4d740b5a759dbaf856&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="]
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
      url: "https://premium-blue-lagoon-hotel-hurghada.booked.com.pl/data/Photos/OriginalPhoto/12771/1277135/1277135320/Royal-Lagoons-Resort-Aqua-Park-Families-And-Couples-Only-Hurghada-Exterior.JPEG",
      slides:["https://premium-blue-lagoon-hotel-hurghada.booked.com.pl/data/Photos/OriginalPhoto/12771/1277135/1277135320/Royal-Lagoons-Resort-Aqua-Park-Families-And-Couples-Only-Hurghada-Exterior.JPEG",
      "https://assets.onthebeach.co.uk/m/72f2c3e4c7cd8fc4/Small-hotelimages-ali-baba-palace-294603-1",
      "https://www.serenityhotelsegypt.com/uploads/home-slides/IMG_1008-iid-home-slide-d-.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="]
      },
      {
      rate: 8.2,
      ratecount: 344,
      name: "Cair Royal",
      stars: 5,
      price:"908",
      url: "https://theluxuryeditor.com/wp-content/uploads/2018/09/22449425.jpg",
      slides:["https://theluxuryeditor.com/wp-content/uploads/2018/09/22449425.jpg",
      "https://ocdn.eu/images/pulscms/OTM7MDA_/1f05a4cb9e2f4866bd6f6029d0ac54a5.jpg",
      "https://www.serenityhotelsegypt.com/uploads/home-slides/IMG_1008-iid-home-slide-d-.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="]
      },
      {
      rate: 9.6,
      ratecount: 306,
      name: "Allibaba Hurgada Hotel",
      stars: 4,
      price:"699",
      url: "https://traveller.easyjet.com/public/uploads/Egypy%20hotels_Sharm_Charmillion%20Aqua%20Park.jpg",
      slides:["https://traveller.easyjet.com/public/uploads/Egypy%20hotels_Sharm_Charmillion%20Aqua%20Park.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/259259861.jpg?k=55f327bfa29bcc150a55ff6768f0b2d027230d528d13953037259f6ec58921e6&o=&hp=1",
      "https://assets.onthebeach.co.uk/m/4b4af5d0eaadcacd/Medium-hotelimages-ali-baba-palace-294603-21",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
         price:"399",
         slides:["https://i.wakacje.pl/no-index/hotel/turcja/alaiye-kleopatra-1067449786-original.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStF4nEnpgPVHUDfhwqTCtLnlVpxL6ZwE2cRaQg7X6lrSZIg1P8w_CbbBGC-yo6nC_qXmY&usqp=CAU",
         "https://s.joinup.lt/uploads/hotel/41375/gallery/original/Alaiye-Kleopatra-Hotel4.jpg",
         "https://assets.onthebeach.co.uk/m/9c29db5c317812/Small-15A%20PUZZLE%20BAR"]
         },
         {
         url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/365840754.jpg?k=0fad068f6c619371192604a9dbec452fc6e2041fe9016b19f4c86a19d347b165&o=&hp=1",
         rate: 9.4,
         ratecount: 356,
         name: "Alladin Hotel",
         stars: 5,
         price:"560",
         slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/365840754.jpg?k=0fad068f6c619371192604a9dbec452fc6e2041fe9016b19f4c86a19d347b165&o=&hp=1",
         "https://easyjet-holidays-images-prod.s3-eu-west-1.amazonaws.com/TRAN0030_Eftalia_Aqua/Large/TRAN0030_45.jpg",
         "https://easyjet-holidays-images-prod.s3-eu-west-1.amazonaws.com/TRAN0030_Eftalia_Aqua/Large/TRAN0030_01.jpg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
         "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
      price:"529",
      slides:["https://www.greeka.com/hotels/photos/3280/santorini-atlantis-santorini-top-19-1280.jpg",
      "https://www.atlantishotel.gr/sites/atlantishotel/files/1.jpg",
      "https://i.wakacje.pl/no-index/hotel/grecja/admiral-argassi-obiekt-basen-826730734-800-600.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
         rate: 9.6,
         ratecount: 106,
         name: "Zante Maris Suites",
         stars: 5,
         url: "https://zante-maris-suites-tsilivi.booked.com.pl/data/Photos/OriginalPhoto/8943/894392/894392953/Zante-Maris-Suites-Adults-Only-Tsilivi-Exterior.JPEG",
         price:"1025",
         slides:["https://zantemarissuites.gr/images/about-section.jpg",
         "https://zante-maris-suites-tsilivi.booked.com.pl/data/Photos/OriginalPhoto/8943/894392/894392953/Zante-Maris-Suites-Adults-Only-Tsilivi-Exterior.JPEG",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/219229965.jpg?k=f7d25ebc4ea5534aa2466a4536780178b33a58bc16192d48f55df009c1ff85d6&o=&hp=1",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
         "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
      price:"340",
      slides:["https://cf.bstatic.com/xdata/images/hotel/max500/426584726.jpg?k=1fbb6e4fe60fbbeaf8615e6a8940ea63e29ee353c745495a0ebfc4f78145af48&o=&hp=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rzSCNVdqzKtXQvBnXMI2NTyoc5-LpSvazGwwF9GUm1zpWSNVndPuzgCs5R4JBouFFgs&usqp=CAU",
      "https://thekit.ca/wp-content/uploads/2022/10/2022-travel-w-rome-thekit.ca-feature-1200x675.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
         rate: 6.8,
         ratecount: 206,
         country: "Italy",
         name: "Rome Royal",
         stars: 4,
         url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
         price:"268",
         slides:["https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
         "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/02/Best-Hotel-Rome_Villa-Agrippina-a-Gran-Melia-Hotel-Pool_Facebook.jpg",
         "https://ew77mymd4fj.exactdn.com/wp-content/uploads/2022/11/Villa-Agrippina-Gran-Melia%CC%81-%E2%80%93-The-Leading-Hotels-of-the-World.jpeg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
         "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
         rate: 9.2,
         ratecount: 223,
         country: "Italy",
         name: "Butique Cave Hotel",
         stars: 5,
         url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/88542794.jpg?k=3bbf83f185d7ffed136d7e12636aeff36c21b156760a9d5ed158c62ffbc9636a&o=&hp=1",
         price:"960",
         slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/88542794.jpg?k=3bbf83f185d7ffed136d7e12636aeff36c21b156760a9d5ed158c62ffbc9636a&o=&hp=1",
         "https://iconicsantorini.com/wp-content/uploads/2023/02/IconicAlexandraAdonis-19.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOgHV5nRTP4wvC2VQ0MKxLjlsq659c30OrhHMluVylvymmWIwM1E25Tt9MCrScVD-S-I&usqp=CAU",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
         "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
      price:"1090",
      slides:["https://elitetravel-albania.com/wp-content/uploads/2021/07/regina-blu2-1024x906.jpg",
      "https://regina-hotel-vlore.booked.net/data/Photos/OriginalPhoto/14058/1405810/1405810388/Regina-Blu-Hotel-Vlore-Exterior.JPEG",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKwTigD_kC0SI8u882FG8A7viWVXO6mlXAKhNEWxPFXOykDcoJQNgfdGinpDwAxOPZGs&usqp=CAU",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
      rate: 5.4,
      ratecount: 105,
      name: "Amr hotel",
      stars: 3,
      url: "https://i.wakacje.pl/no-index/hotel/albania/amr-1107116357-original.jpg",
      price:"230",
      slides:["https://i.wakacje.pl/no-index/hotel/albania/amr-1107116357-original.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/339105857.jpg?k=feca6e07800730201f97b504c98367f181d7accf741d50e69332eef4834c8664&o=&hp=1",
      "https://i.content4travel.com/cms/img/u/mobile/se/tiaamrh_0.jpg?version=230429-12",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
      rate: 8.8,
      ratecount: 140,
      name: "Grand Hotel Aman",
      stars: 5,
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325954928.jpg?k=75ab53619671cf4bd7fac8913c794e901cce5245e9a87395ccbcd8787a166f06&o=&hp=1",
      price:"709",
      slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/325954928.jpg?k=75ab53619671cf4bd7fac8913c794e901cce5245e9a87395ccbcd8787a166f06&o=&hp=1",
      "https://i.wakacje.pl/no-index/hotel/albania/bonita-basen-1061179284-570-428.jpg",
      "https://cdntravelplanet.pl/1746/REGO/miniature820x0/albania/riwiera-albanska/durres/bonita_0.webp?datago=1&t=638329209164920469",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
      price:"578",
      slides:["https://media.timeout.com/images/105252341/750/562/image.jpg",
      "https://www.immostyle.it/images/travelstyle/marrakech/1royal768x408.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0MvzC6BWzOfIaVtW4_E5eSWMytYaqo8yEYEACh315IlKaVwaU0Ly8WyQHLDwjWxZzB8&usqp=CAU",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
      rate: 7.8,
      ratecount: 324,
      name: "Sirayane hotel",
      stars: 5,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/c7/79/riad-dar-anika.jpg?w=1200&h=-1&s=1",
      price:"908",
      slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/c7/79/riad-dar-anika.jpg?w=1200&h=-1&s=1",
      "https://riad-dar-anika-marrakesh.booked.net/data/Photos/OriginalPhoto/14356/1435620/1435620448/Dar-Anika-Hotel-Marrakesh-Exterior.JPEG",
      "https://riad-dar-anika-marrakesh.booked.net/data/Photos/OriginalPhoto/12769/1276933/1276933588/Dar-Anika-Hotel-Marrakesh-Exterior.JPEG",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
      rate: 9.5,
      ratecount: 93,
      name: "Amanjenna resort",
      stars: 4,
      url: "https://www.hotelswithprivatepool.com/Images/marrakech-morocco-hotels-with-private-pool-9.jpg",
      price:"600",
      slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/290210570.jpg?k=21500332215b4c3dcd77896bc97af558b5d3925596e847920a9890bea6ad5fa1&o=&hp=1",
      "https://www.hotelswithprivatepool.com/Images/marrakech-morocco-hotels-with-private-pool-9.jpg",
      "https://media.cntraveler.com/photos/57ed7c029630feea086fbd4e/16:9/w_2560%2Cc_limit/Exterior-Amanjena-MarrakechMorocco-CRHotel.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
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
      price:"349",
      slides:["https://www.touropia.com/gfx/b/2016/02/Hotel_Alfonso_XIII.jpg",
      "https://www.thehotelguru.com/_images/66/aa/66aafeae8ef54e97ce398f95acf6e321/s440x294.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
       },
       {
      rate: 7.8,
      ratecount: 205,
      name: "On The Beach Hotel",
      stars: 4,
      url: "https://assets.onthebeach.co.uk/m/17deb1c9d160d0eb/Pod-hotelimages-mercury-hotel-283799-1",
      price:"502",
      slides:["https://assets.onthebeach.co.uk/m/17deb1c9d160d0eb/Pod-hotelimages-mercury-hotel-283799-1",
      "https://a.loveholidays.com/images/holidays/7eb6b649101b7b46310f00d4f58e9a1e392fb514/holidays/spain/costa-brava/malgrat-de-mar/h-top-planamar-hotel-0.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
       },
       {
      rate: 9.9,
      ratecount: 23,
      name: "Luxury Apartaments",
      stars: 5,
      url: "https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
      price:"1200",
      slides:["https://spainguides.com/wp-content/uploads/2023/09/Hotel-Puente-Romano.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/28/fc/61/97/paradisus-gran-canaria.jpg",
      "https://www.hotelswithprivatepool.com/Images/ibiza-spain-hotels-with-private-pool-3.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
      "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
       }
     ],
   },
   {
    country: "Thailand",
    description: "Thailand is a tropical paradise known for its stunning beaches, rich cultural heritage, and delicious street food. It's a popular destination for tourists from around the world.",
    imageUrl: "https://cdn.content.tuigroup.com/adamtui/2019_8/30_14/49f61811-d13d-44e6-9977-aab900ee376a/ACC_990246_shutterstock_1014644104WebOriginalCompressed.jpg",
    hotels: [
      {
        rate: 8.9,
        ratecount: 145,
        name: "Bangkok Grand Palace",
        stars: 4,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227559937.jpg?k=8f4a1e588fa48954caa1b3c0f113c76a8cc3ec7361b43e117fee08a7710faf15&o=&hp=1",
        price: "320",
        slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/227559937.jpg?k=8f4a1e588fa48954caa1b3c0f113c76a8cc3ec7361b43e117fee08a7710faf15&o=&hp=1",
        "https://media-cdn.tripadvisor.com/media/photo-s/1a/f0/41/2c/ban-s-diving-resort.jpg",
        "https://theluxuryeditor.com/wp-content/uploads/2020/01/16756074.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 7.5,
        ratecount: 212,
        name: "Krabi Beachfront Resort",
        stars: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/37/c5/e7/swimming-pool-5.jpg?w=1200&h=-1&s=1",
        price: "450",
        slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/37/c5/e7/swimming-pool-5.jpg?w=1200&h=-1&s=1",
        "https://media-cdn.tripadvisor.com/media/photo-s/09/c7/f1/a4/beachfront.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkryEb12YZ9RTzn-s_5dx8Xjsq3v5R0v8Vw_YJmBhmj-gg5lXIWpckG86RParW6Qvoiw&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.6,
        ratecount: 68,
        name: "Phuket Luxury Villas",
        stars: 5,
        url: "https://www.holidify.com/images/cmsuploads/compressed/244353400_20220223171427.jpg",
        price: "1500",
        slides:["https://www.holidify.com/images/cmsuploads/compressed/244353400_20220223171427.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVLfCUlM2XObUrdUOZvzl1WDVPSYTraMWdESVOWuVPiDC7pzZ5sxRziaN3tUayQbHJ48&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT_yaPheqoVvbK4rszrEtbdLNBa1vny1YrOGEueso9leBH73CIFSE9NzRViZtoebdDqc&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      }
    ]
  },
  {
    country: "Venezuela",
    description: "Venezuela is a South American country known for its diverse landscapes, including the Andes Mountains and beautiful beaches. It offers a mix of cultural heritage and natural beauty.",
    imageUrl: "https://i.natgeofe.com/n/95cea01e-76ae-460e-80c7-308cd7de46b9/MM8844_210221_052439.jpg?w=2520&h=1678",
    hotels: [
      {
        rate: 8.5,
        ratecount: 98,
        name: "Caracas Plaza Hotel",
        stars: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8f/e4/3b/hesperia-isla-margarita.jpg?w=1200&h=-1&s=1",
        price: "280",
        slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8f/e4/3b/hesperia-isla-margarita.jpg?w=1200&h=-1&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46921827.jpg?k=6a1489190c8c5694e613e2f9057a42c238384ce2cf611999bbca7fce4202a077&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/301495231.jpg?k=0158377eb7d23b8f27d89509f43d05aff7a99e64268bf938516947f4ccedb780&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 7.2,
        ratecount: 152,
        name: "Angel Falls Lodge",
        stars: 3,
        url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/75/d4/42/piscina-atardecer.jpg",
        price: "350",
        slides:["https://media-cdn.tripadvisor.com/media/photo-s/0b/75/d4/42/piscina-atardecer.jpg",
        "https://q-xx.bstatic.com/xdata/images/hotel/840x460/264914499.jpg?k=59cb35ec31a598fa8f3356c119432150fb94c9c393efc5b5a5a4e6403d473b72&o=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0_leS6BHpxyjdC4CHywbWcL0VgVq6-7iCzEYWk9qGk3IeD1PrAVfOcX3Hba1qDHL5CM&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.1,
        ratecount: 45,
        name: "Margarita Island Resort",
        stars: 5,
        url: "https://www.traveltourxp.com/wp-content/uploads/2016/12/Luxury-Hotels-In-Venezuela.jpg",
        price: "1200",
        slides:["https://www.traveltourxp.com/wp-content/uploads/2016/12/Luxury-Hotels-In-Venezuela.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/17/4a/27/6c/ld-plus-palm-beach.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      }
    ]
  },
  {
    country: "Kenya",
    description: "Kenya is an East African country known for its diverse wildlife, including the 'Big Five.' It offers breathtaking savannahs, national parks, and rich cultural experiences.",
    imageUrl: "https://s3-cdn.designerjourneys.com/blog/wp-content/uploads/2021/06/23092300/damian-patkowski-T-LfvX-7IVg-unsplash-scaled.jpg",
    hotels: [
      {
        rate: 9.1,
        ratecount: 120,
        name: "Nairobi Safari Lodge",
        stars: 4,
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411394626.jpg?k=947438beb69caf0b30b2f81e2d5503bf94820322f77e569fd566932284e54133&o=&hp=1",
        price: "350",
        slides:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/411394626.jpg?k=947438beb69caf0b30b2f81e2d5503bf94820322f77e569fd566932284e54133&o=&hp=1",
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Kenya/and-Beyond-Bateleur-Camp-kenya-prod.jpg",
        "https://www.telegraph.co.uk/content/dam/Travel/hotels/africa/kenya/elsas-kopje-lodge-p.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 7.8,
        ratecount: 85,
        name: "Mombasa Beach Resort",
        stars: 4,
        url: "https://yellowzebrasafaris.com/media/16982/at-night-03.jpg",
        price: "450",
        slides:["https://yellowzebrasafaris.com/media/16982/at-night-03.jpg",
        "https://www.telegraph.co.uk/content/dam/Travel/hotels/africa/kenya/mahali-mzuri-kenya.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51tlv31EZUixFLfJvmB-lcR25z5XVeWGinLSgO7DT8iQtCt4iIfTpf8xmhUS9P-EYQ2s&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.5,
        ratecount: 60,
        name: "Maasai Mara Luxury",
        stars: 5,
        url: "https://static.wixstatic.com/media/d51816_5e3843995ccb43cfb8e92603b812bb3e~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d51816_5e3843995ccb43cfb8e92603b812bb3e~mv2.jpg",
        price: "1500",
        slides:["https://static.wixstatic.com/media/d51816_5e3843995ccb43cfb8e92603b812bb3e~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d51816_5e3843995ccb43cfb8e92603b812bb3e~mv2.jpg",
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Kenya/and-Beyond-Bateleur-Camp-kenya-prod.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaX9f_ibmXLGhGK0E47C0-P3_GCSbx6qgnOCgk3WRQKQNcdBoa0P3rkteafAgeKDvZt3k&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      }
    ]
  },
  {
    country: "Dominica",
    description: "Dominica is a Caribbean island nation known for its lush rainforests, volcanic landscapes, and natural hot springs. It's a paradise for nature enthusiasts.",
    imageUrl: "https://media.cntraveler.com/photos/63d93883ff7e4ac51f2db422/16:9/w_2560%2Cc_limit/Secret%2520Bay_Aerial%2520View%2520of%2520Secret%2520Bay.jpg",
    hotels: [
      {
        rate: 8.7,
        ratecount: 68,
        name: "Roseau Rainforest Lodge",
        stars: 4,
        url: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Caribbean/cabrits-hotel-dominica-p.jpg",
        price: "320",
        slides:["https://www.telegraph.co.uk/content/dam/Travel/Destinations/Caribbean/cabrits-hotel-dominica-p.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406341161.jpg?k=a7c6f4879a3e57aa25e8c33b407f2e9d147c989a807c663a469dcd9d61e9467b&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.4,
        ratecount: 105,
        name: "Calibishie Cove Resort",
        stars: 5,
        url: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/01/LAUCHERT_MOE191120_9-Dominica-stays-940x528.jpg",
        price: "650",
        slides:["https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/01/LAUCHERT_MOE191120_9-Dominica-stays-940x528.jpg",
        "https://www.telegraph.co.uk/content/dam/Travel/hotels/caribbean-islands/dominica/secret-bay-hotel-dominica-prod.jpg",
        "https://secretbay.dm/wp-content/uploads/2023/10/OVERALL-PERSPECTIVE-2023-1.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.2,
        ratecount: 42,
        name: "Trafalgar Falls Inn",
        stars: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d0/7b/58/fort-young-hotel.jpg?w=1200&h=-1&s=1",
        price: "580",
        slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d0/7b/58/fort-young-hotel.jpg?w=1200&h=-1&s=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkbNc96Bxbm_ay6a5Tfe1AUPbSF_60C6eub1vB7ET4LvWSjPdVjPHOixWD37EPXiPsiQ&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      }
    ]
  },
  {
    country: "Zanzibar",
    description: "Zanzibar is an Indian Ocean paradise known for its white sandy beaches, historic Stone Town, and vibrant marine life. It's a haven for beach lovers and divers.",
    imageUrl: "https://cdn-images.go2africa.com/wp-content/uploads/2022/02/09150009/Blog-Zanzibar-Coastline-2.jpg",
    hotels: [
      {
        rate: 8.9,
        ratecount: 95,
        name: "Zanzibar Beach Resort",
        stars: 4,
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/8e/8a/24/beautiful.jpg?w=700&h=-1&s=1",
        price: "450",
        slides:["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/8e/8a/24/beautiful.jpg?w=700&h=-1&s=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max500/389969222.jpg?k=cb8dfa88773e885c1e3bc40fd5bfb27937528b08cfeba663bd1b8a7e88d3c651&o=&isSkia=true",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNX9PVq_Bzs1pCrTWRajy3vKuOBJzDgr1TewY27R1MCO3sgZc7tTQdS_QbHBdvl9vfOhg&usqp=CAU",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 7.6,
        ratecount: 120,
        name: "Stone Town Hotel",
        stars: 3,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/125222703.jpg?k=441b28970bd4437ad4754894ea01a91116141c5d5dac5778901af89de523b057&o=&isSkia=true",
        price: "320",
        slides:["https://q-xx.bstatic.com/xdata/images/hotel/max500/125222703.jpg?k=441b28970bd4437ad4754894ea01a91116141c5d5dac5778901af89de523b057&o=&isSkia=true",
        "https://www.kayak.com/rimg/himg/54/a4/af/expediav2-603107-8f0d43-537861.jpg?width=1366&height=768&crop=true",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      },
      {
        rate: 9.4,
        ratecount: 55,
        name: "Pemba Island Retreat",
        stars: 5,
        url: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/125217700.jpg?k=cbf3d61df9e46437cd773af93870d351fc275279c5473f84a361cb73e8e300e3&o=&isSkia=true",
        price: "1400",
        slides:["https://q-xx.bstatic.com/xdata/images/hotel/840x460/125217700.jpg?k=cbf3d61df9e46437cd773af93870d351fc275279c5473f84a361cb73e8e300e3&o=&isSkia=true",
        "https://www.kayak.com/rimg/himg/54/a4/af/expediav2-603107-8f0d43-537861.jpg?width=1366&height=768&crop=true",
        "https://www.luxurylink.com/images/sho_513689ef/11937_13-945/Pool.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231390906.jpg?k=26298936070b6cd10e733dc1401232d5cda4dc8c3ef83e004b2436b6246ff682&o=&hp=1",
        "https://q-xx.bstatic.com/xdata/images/hotel/max750/106480114.jpg?k=bc6113caa9578e5783a2fae58d8da403cdbda6bd9a1ae9cbbbcba512306c1e11&o="] 
      }
    ]
  },
];



const Countrypage = () => {
let {countryName} = useParams();
const name = countryName || 'else';

const idxChecker = (name:string) => {
  let index=0;
  for (let i of travelNotes ){
    if(name===i.country){return index}
  index++; 
  }
  return(404)
}
var idx=idxChecker(name);

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