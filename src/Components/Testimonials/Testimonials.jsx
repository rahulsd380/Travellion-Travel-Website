import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";


const Testimonials = () => {
    const locations = [
        {
          name: "Monument of Berlin, Germany",
          feedback: "Explore the rich history of this historical landmark in Berlin. Discover its cultural significance and marvel at the architectural beauty. A must-visit for history enthusiasts.",
          title: "Accountant",
          image: "https://i.ibb.co/yPdKYgz/1.jpg",
        },
        {
          name: "Eiffel Tower, France",
          feedback: "Experience the iconic Eiffel Tower with breathtaking city views. A symbol of romance and architectural marvel. Enhance your Parisian adventure with this must-see landmark.",
          title: "Journalist, HWO News",
          image: "https://i.ibb.co/cyyNYpN/2.jpg",
        },
        {
          name: "Golden Gate Bridge, USA",
          feedback: "Marvel at the Golden Gate Bridge, a city-connecting engineering marvel. Explore its history, architectural design, and significance in the heart of San Francisco. An iconic landmark.",
          title: "Managing Director, JTH",
          image: "https://i.ibb.co/vc36Gn6/3.jpg",
        },
        {
          name: "Great Wall of China, China",
          feedback: "Experience breathtaking views at the Great Wall of China, a world heritage site. Learn about its cultural importance, history, and preservation efforts. A journey through time and wonder.",
          title: "Accountant",
          image: "https://i.ibb.co/H4q1f7R/4.jpg",
        },
        {
          name: "Machu Picchu, Cusco, Peru",
          feedback: "Immerse yourself in the wonders of Machu Picchu, an archaeological marvel nestled in the Andes. Explore the ancient ruins, learn about Incan history, and savor the breathtaking landscapes.",
          title: "Accountant",
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
      <div className="mb-10 px-3 md:px-0">
        <h1 className="text-3xl mb-3">Traveler’s Experiences</h1>
        <div className="h-0.5 w-44 bg-orange-500 mb-2"></div><p className="">
          Here some awesome feedback from our travelers
          </p>
      </div>

      <div className="">
        <div className="">
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
              <div key={idx} className="p-4 min-w-[100%] md:min-w-[40%]">
                <div className="bg-[#f5f6f7] p-3 rounded-md relative">
            <div className="avatar absolute bottom-72 md:bottom-60">
  <div className="w-16 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
                <p className="text-gray-500 mb-3 mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>
                <div className="flex items-center gap-2 text-yellow-400 mb-3">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        </div>

        <h1 className="text-2xl text-gray-500">Rahul Sutradhar</h1>
        <p className="text-gray-400">Web Developer</p>
            </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-10">
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
        
      </div>

      
    </div>
    );
};

export default Testimonials;