import { useState } from "react";

export const CarouselMain = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://source.unsplash.com/600x600/?bedroom", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?room", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?livingrooms", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?livingroom", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?bedrooms", tags: "Room",},];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200 rounded-3xl`}
                    >
                        <img src={slide.img} className="w-full h-full rounded-3xl" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Carousel2 = () => {
  return (
    <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
        <div className=" w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
        <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h1 className="text-3xl font-semibold text-gray-500">Trip Planners</h1>
        <div className="h-0.5 w-20 bg-orange-500 mb-2"></div>
            <p className="text-[#616161] text-xs md:text-lg mb-4">20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>
           <div className="flex relative">
            <div className="p-5 bg-gray-800 absolute bottom-7"></div>
           <div className="relative pl-3">
           <button className="text-white bg-[#ff7757] font-semibold border-blue-400 rounded-md py-3 px-4">
                  View all trip plans
                </button>
           </div>
                <div className="p-5 bg-gray-500 absolute right-48 top-8"></div>
           </div>
        </div>
        <CarouselMain />
    </div>
  );
};