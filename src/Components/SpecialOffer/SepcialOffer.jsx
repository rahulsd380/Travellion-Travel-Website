import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";


const SepcialOffer = () => {
    const locations = [
        {
          location: "Monument of Berlin, Berlin, Germany",
          designation: "Historical Landmark",
          testimonialDescription:
            "This monument has been a significant part of Berlin's history, and Taskiee has helped us manage various aspects of its preservation and maintenance.",
          keyWord: "Monument",
          image: "https://i.ibb.co/yPdKYgz/1.jpg",
        },
        {
          location: "Eiffel Tower, Paris, France",
          designation: "Iconic Landmark",
          testimonialDescription:
            "As a caretaker of the Eiffel Tower, Taskiee has become essential in coordinating maintenance schedules and ensuring the smooth operation of this iconic structure.",
          keyWord: "Landmark",
          image: "https://i.ibb.co/cyyNYpN/2.jpg",
        },
        {
          location: "Golden Gate Bridge, San Francisco, USA",
          designation: "Engineering Marvel",
          testimonialDescription:
            "Taskiee's project management tools have played a crucial role in overseeing maintenance projects and ensuring the longevity of the Golden Gate Bridge.",
          keyWord: "Bridge",
          image: "https://i.ibb.co/vc36Gn6/3.jpg",
        },
        {
          location: "Great Wall of China, Beijing, China",
          designation: "World Heritage Site",
          testimonialDescription:
            "Preserving the Great Wall of China requires meticulous planning, and Taskiee has been instrumental in organizing conservation efforts and volunteer programs.",
          keyWord: "Heritage",
          image: "https://i.ibb.co/H4q1f7R/4.jpg",
        },
        {
          location: "Machu Picchu, Cusco, Peru",
          designation: "Archaeological Site",
          testimonialDescription:
            "Taskiee has facilitated collaboration among archaeologists and researchers to preserve and study the rich history of Machu Picchu, ensuring its cultural significance endures.",
          keyWord: "Archaeology",
          image: "https://i.ibb.co/GFzwPhm/5.jpg",
        },
      ];
    
      const [currentSlider, setCurrentSlider] = useState(0);
      // The slider images array
      const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
          currentSlider === 0 ? locations.length - 2 : currentSlider - 1
        );
      const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
          currentSlider === locations.length - 2 ? 0 : currentSlider + 1
        );
      // if you don't want to change the slider automatically then you can just remove the useEffect
      useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlider();
        }, 5000);
        return () => {
          clearInterval(intervalId);
        };
      }, [currentSlider]);
    
      const isSmallScreen = window.innerWidth <= 768;

    return (
        <div className="max-w-7xl mx-auto py-10">
      <div>
        <h1 className="text-3xl mb-3">Popular Destinations</h1>
        <div className="h-0.5 w-44 bg-orange-500 mb-2"></div>
        <div className="flex justify-between items-center">
          <p className="">
            Most popular destinations around the world, from historical places
            to natural wonders.
          </p>

          <div className="flex items-center gap-3">
            <div
              onClick={prevSlider}
              className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-2 rounded-md text-white cursor-pointer"
            >
              <FaAngleLeft></FaAngleLeft>
            </div>
            <div
              onClick={nextSlider}
              className="bg-orange-500 hover:bg-orange-600 transition duration-300 p-2 rounded-md text-white cursor-pointer"
            >
              <FaAngleRight></FaAngleRight>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10"></div>

      <div className="max-w-7xl mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
        <div className="relative overflow-hidden">
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {/* sliders */}
            {locations.map((each, idx) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[30%]">
                <div className="relative">
                  <img
                    className="h-96 rounded-2xl relative w-full"
                    src={each.image}
                    alt=""
                  />
                  <div className="absolute bottom-3 px-4 text-white">
                    <h1 className="text-xl mb-1">{each.location}</h1>
                    <p className="flex items-center gap-2">
                      <MdLocationOn></MdLocationOn> {each.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default SepcialOffer;