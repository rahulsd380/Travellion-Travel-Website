import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";


const SepcialOffer = () => {
    const locations = [
        {
          location: "Monument of Berlin, Germany",
          description: "Explore the rich history of this historical landmark in Berlin. Discover its cultural significance and marvel at the architectural beauty. A must-visit for history enthusiasts.",
          price: 1000,
          image: "https://i.ibb.co/yPdKYgz/1.jpg",
        },
        {
          location: "Eiffel Tower, France",
          description: "Experience the iconic Eiffel Tower with breathtaking city views. A symbol of romance and architectural marvel. Enhance your Parisian adventure with this must-see landmark.",
          price: 1500,
          image: "https://i.ibb.co/cyyNYpN/2.jpg",
        },
        {
          location: "Golden Gate Bridge, USA",
          description: "Marvel at the Golden Gate Bridge, a city-connecting engineering marvel. Explore its history, architectural design, and significance in the heart of San Francisco. An iconic landmark.",
          price: 1200,
          image: "https://i.ibb.co/vc36Gn6/3.jpg",
        },
        {
          location: "Great Wall of China, China",
          description: "Experience breathtaking views at the Great Wall of China, a world heritage site. Learn about its cultural importance, history, and preservation efforts. A journey through time and wonder.",
          price: 800,
          image: "https://i.ibb.co/H4q1f7R/4.jpg",
        },
        {
          location: "Machu Picchu, Cusco, Peru",
          description: "Immerse yourself in the wonders of Machu Picchu, an archaeological marvel nestled in the Andes. Explore the ancient ruins, learn about Incan history, and savor the breathtaking landscapes.",
          price: 2000,
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
    
      const isSmallScreen = window.innerWidth <= 768;

    return (
        <div className="max-w-7xl mx-auto py-10">
      <div>
        <h1 className="text-3xl mb-3 text-end">Special Offer</h1>
        <div className="flex justify-end">
        <div className="h-0.5 w-44 bg-orange-500 mb-2"></div>
        </div>
        <div className="flex justify-between items-center">
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

          <p className="">
          Check out our special offer and discounts
          </p>
        </div>
      </div>

      <div className=""></div>

      <div className="">
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
              <div key={idx} className="p-4 min-w-full md:min-w-[30%] rounded-2xl">
                <div className="rounded-2xl bg-[#FFF8F1]">
                <img className="rounded-t-2xl mb-4 h-60" src={each.image} alt="" />
                <div className="px-2 pb-2">
                <h1 className="text-2xl mb-1">{each.location}</h1>
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        </div>
                <p className="mb-2">{each.description}</p>

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p>From</p>
                    <h1 className="text-2xl text-orange-400">
                        ${each.price}
                    </h1>
                </div>
                <button className="text-white bg-orange-400 font-semibold border-blue-400 rounded-md py-2 px-4">
                  Details
                </button>
                </div>
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