import React from 'react'
import CardTravelPage from '../CardTravelPage'
import Footer from '../Footer';

const travelBlogDB = [
  {
    bgimage:"https://blizejswiata.airtoursclub.pl/wp-content/uploads/2022/07/xavier-coiffic-ByAHlRiTQjo-unsplash-scaled.jpg",
    mark:"Exotic Island",
    place:"Maurituis",
    title:"Mauritius",
    subtitle:"Beaches, lagoons, reefs and more",
    introduction:"Mauritius, a tiny jewel nestled in the Indian Ocean, has long been synonymous with the idea of a tropical paradise. With its pristine beaches, lush landscapes, and a rich cultural heritage, it's no wonder that Mauritius is a dream destination for travelers from all over the world. In this blog post, we're going to explore the magic of Mauritius holidays and why this island nation is a must-visit for every type of traveler.",
    p1:"For the adventurous traveler, Mauritius offers a wide array of exciting activities. Explore the lush jungle interiors, hike up the Black River Gorges National Park for breathtaking views, or take a thrilling quad bike ride across the dramatic landscapes. Water enthusiasts can go scuba diving, deep-sea fishing, or even swim with dolphins in the crystal-clear waters.",
    p2:"For the adventurous traveler, Mauritius offers a wide array of exciting activities. Explore the lush jungle interiors, hike up the Black River Gorges National Park for breathtaking views, or take a thrilling quad bike ride across the dramatic landscapes. Water enthusiasts can go scuba diving, deep-sea fishing, or even swim with dolphins in the crystal-clear waters.",
    p3:"Mauritius is home to some of the world's most luxurious resorts and hotels. Whether you're looking for an overwater bungalow experience, a wellness retreat, or an all-inclusive beachfront escape, you'll find a wide range of options to pamper yourself and indulge in paradise.",
    end:"Mauritius holidays are a dream come true for travelers of all kinds. Whether you're seeking relaxation on pristine beaches, adventure in the great outdoors, a taste of diverse cultures, or a luxurious retreat, this tropical paradise has it all. Make your dream holiday a reality and experience the magic of Mauritius for yourself. Don't miss the chance to explore this mesmerizing island and create memories that will last a lifetime. Your next adventure awaits in Mauritius!"
  },
  {
    bgimage: "https://media.timeout.com/images/103418530/750/562/image.jpg",
    mark:"Culture trip",
    place: "Kyoto, Japan",
    title: "Kyoto",
    subtitle: "Tradition, Tranquility, and Temples",
    introduction: "Kyoto, a city where modernity seamlessly blends with tradition, is a timeless treasure of Japan. With its enchanting temples, serene gardens, and a rich cultural heritage, Kyoto is a must-visit destination for travelers seeking a glimpse of Japan's past and present. In this blog post, we'll delve into the allure of Kyoto and why it captivates the hearts of those who wander its ancient streets.",
    p1: "For the culture enthusiast, Kyoto is a living museum of Japan's heritage. Explore the iconic Kinkaku-ji, the stunning Golden Pavilion, or the Fushimi Inari Shrine, famous for its thousands of vermilion torii gates. Wander through the historic Gion district and, if you're lucky, catch a glimpse of a geisha gracefully passing by.",
    p2: "Nature lovers will find solace in Kyoto's beautiful gardens, like the tranquil Arashiyama Bamboo Grove. Take a traditional tea ceremony in a peaceful teahouse or enjoy a serene boat ride along the Hozugawa River for a view of cherry blossoms in spring and fiery foliage in autumn.",
    p3: "Kyoto offers a variety of accommodations that reflect its charm. From charming ryokans with tatami mat rooms to modern boutique hotels, you can immerse yourself in the essence of Japanese hospitality. Indulge in kaiseki cuisine, a multi-course meal showcasing the finest seasonal ingredients.",
    end: "Kyoto is a destination that leaves an indelible mark on your soul. Whether you seek cultural enlightenment, natural beauty, or a peaceful escape, Kyoto has it all. Immerse yourself in the heart of Japan, experience the timeless traditions, and create unforgettable memories. Your next adventure awaits in Kyoto!"
  },
  {
    bgimage: "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg",
    mark:"Recomended destination",
    place: "Venice, Italy",
    title: "Venice",
    subtitle: "Canals, Romance, and Renaissance",
    introduction: "Venice, a city unlike any other, is a masterpiece of art, history, and romance. With its intricate network of canals, stunning architecture, and a rich cultural heritage, Venice beckons travelers from around the globe. In this blog post, we'll explore the allure of Venice and why it's a destination that promises a unique and unforgettable experience.",
    p1: "For the incurable romantic, Venice is a dream come true. Take a gondola ride along the meandering canals and let the serenading gondoliers transport you to another era. Visit St. Mark's Square, a stunning showcase of Byzantine and Gothic architecture, and don't forget to feed the pigeons while sipping on a cappuccino.",
    p2: "Art enthusiasts will be captivated by Venice's world-class museums and galleries. Explore the Gallerie dell'Accademia, which houses a treasure trove of Renaissance masterpieces, or visit the Doge's Palace to witness the opulence of Venetian nobility.",
    p3: "Venice offers a range of accommodations, from opulent waterfront hotels to cozy boutique inns. Sample the delectable cuisine of the Veneto region in charming local restaurants, where fresh seafood and risotto are the stars of the menu.",
    end: "Venice is a city that casts an enchanting spell on every visitor. Whether you're searching for romance, art, history, or simply a unique experience, Venice offers it all. Immerse yourself in the labyrinth of canals, embrace the timeless beauty, and create memories that will last a lifetime. Your next adventure awaits in Venice!"
},
{
  bgimage: "https://www.hotelscombined.com/rimg/dimg/a4/3b/dbe941d6-city-44900-168a5cb01cb.jpg?width=1366&height=768&xhint=2003&yhint=967&crop=true&watermarkposition=lowerright",
  mark:"Recomended destination",
  place: "Kusadasi, Turkey",
  title: "Kusadasi",
  subtitle: "Sun, Sea, and Ancient Wonders",
  introduction: "Kusadasi, a charming coastal town on Turkey's Aegean coast, is a hidden gem that blends the allure of the Mediterranean with a rich tapestry of history. With its beautiful beaches, vibrant bazaars, and proximity to ancient ruins, Kusadasi is a destination that caters to sun-seekers, history enthusiasts, and those looking for a taste of Turkish culture. In this blog post, we'll dive into the enchantment of Kusadasi and why it's a must-visit on the Aegean shores.",
  p1: "For sun-worshippers and water lovers, Kusadasi's pristine beaches are a paradise. Long Beach, Ladies Beach, and Kadinlar Denizi Beach offer a perfect combination of golden sands and clear, turquoise waters. Spend your days swimming, sunbathing, and enjoying the Mediterranean breeze.",
  p2: "History buffs will be captivated by Kusadasi's proximity to Ephesus, one of the most well-preserved ancient cities in the world. Walk in the footsteps of the ancients along its marble streets, explore the Library of Celsus, and admire the Grand Theatre where gladiators once clashed.",
  p3: "Kusadasi offers a delightful mix of Turkish and international cuisine. Savor traditional dishes like kebabs and baklava at local eateries, and don't miss the chance to indulge in fresh seafood at the town's seaside restaurants. The Kusadasi bazaar is a treasure trove of spices, textiles, and unique souvenirs.",
  end: "Kusadasi is a destination that leaves a lasting impression on every traveler. Whether you're seeking relaxation on beautiful beaches, a journey through history, or a culinary adventure, Kusadasi has it all. Immerse yourself in the charm of this Turkish coastal town, where the sun, sea, and ancient wonders come together to create unforgettable memories. Your next adventure awaits in Kusadasi!"
},
{
  bgimage: "https://assets.editorial.aetnd.com/uploads/2009/12/gettyimages-1352563243.jpg",
  mark:"Exotic long trip",
  place: "Hawaii, USA",
  title: "Hawaii",
  subtitle: "Paradise on Earth",
  introduction: "Hawaii, an archipelago of natural wonders in the middle of the Pacific Ocean, is a dream destination for travelers seeking paradise. With its diverse landscapes, from volcanic craters to lush rainforests, and a unique blend of cultures, Hawaii is a place that offers something for every type of adventurer. In this blog post, we'll explore the enchantment of Hawaii and why it's a destination that's often described as 'paradise on Earth.'",
  p1: "For nature enthusiasts, Hawaii is a playground of outdoor activities. Hike to the summit of Mauna Kea for stargazing, explore the breathtaking Waimea Canyon on Kauai, or snorkel in the crystal-clear waters of Hanauma Bay, where colorful marine life awaits. Don't forget to witness the awe-inspiring lava flows in Hawaii Volcanoes National Park.",
  p2: "Beach lovers will be spoiled for choice with Hawaii's pristine sandy shores. Enjoy the world-famous Waikiki Beach in Oahu, or escape to the secluded and romantic beaches of Maui. If you're an avid surfer, the North Shore of Oahu is a mecca for big wave enthusiasts.",
  p3: "Hawaii offers a rich tapestry of culinary experiences. Savor traditional Hawaiian dishes like poke, lomi lomi salmon, and kalua pig at local eateries. You can also explore the diverse culinary scene with a fusion of Asian and Pacific flavors. Be sure to attend a traditional luau for a cultural and culinary journey.",
  end: "Hawaii is a destination that lives up to the hype. Whether you seek adventure in the great outdoors, relaxation on idyllic beaches, or a taste of diverse cultures, Hawaii has it all. Immerse yourself in the beauty of the islands, embrace the aloha spirit, and create memories that will last a lifetime. Your next adventure awaits in Hawaii!"
},
{
  bgimage: "https://www.lodz-airport.pl/uploads/images/h/679.jpg?ts=0",
  mark:"Recomended destination",
  place: "Antalya, Turkey",
  title: "Antalya",
  subtitle: "Turquoise Coast Paradise",
  introduction: "Antalya, a captivating city on Turkey's Mediterranean coastline, is a dream destination that seamlessly combines natural beauty, history, and modern amenities. With its stunning beaches, ancient ruins, and a vibrant atmosphere, Antalya is a place that appeals to beachgoers, history buffs, and those seeking a taste of Turkish culture. In this blog post, we'll dive into the allure of Antalya and why it's often referred to as the 'Turquoise Coast Paradise.'",
  p1: "For sunseekers and water lovers, Antalya's pristine beaches are a haven. Konyaalti Beach and Lara Beach, with their golden sands and crystal-clear waters, offer the perfect setting for relaxation and water sports. Explore the hidden coves and bays along the Antalya coast by boat for a more secluded experience.",
  p2: "History enthusiasts will be enthralled by Antalya's proximity to ancient sites. Visit the incredible ancient city of Perge, with its well-preserved Roman ruins, and the stunning Termessos, a mountaintop city surrounded by nature. Don't miss the chance to explore the old town of Kaleici, with its charming Ottoman-era architecture.",
  p3: "Antalya boasts a diverse culinary scene. Sample traditional Turkish dishes like kebabs, mezze, and baklava in local restaurants. You can also enjoy fresh seafood while overlooking the Mediterranean. The vibrant Antalya bazaar is a fantastic place to shop for souvenirs, spices, and textiles.",
  end: "Antalya is a destination that leaves an indelible mark on every traveler. Whether you're seeking relaxation on beautiful beaches, a journey through history, or a culinary adventure, Antalya has it all. Immerse yourself in the charm of this Turkish coastal city, where the turquoise waters meet ancient wonders, and create memories that will last a lifetime. Your next adventure awaits in Antalya!"
}
];



const TravelPage = () => {
  return (
    <>
      <div className='mt-20 text-center w-full'>
        <h1 className='text-5xl font-serif  '>Travel stories, inspirations and more</h1>
        <h2 className='text-xl text-gray-700'>Inspire yourself with others expiriance!</h2>
      </div>
      <div className='max-w-[1280px] m-auto'>
        <CardTravelPage travelBlog={travelBlogDB}/>
      </div>
      <Footer/>
    </>
  )
}

export default TravelPage