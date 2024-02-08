import Blog from "../Blog/Blog";
import DestinationGalary from "../DestinationGalary/DestinationGalary";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SepcialOffer from "../SpecialOffer/SepcialOffer";
import { Carousel2 } from "../Trip/Trip";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PopularDestinations></PopularDestinations>
            <SepcialOffer></SepcialOffer>
            <Blog></Blog>
            <Carousel2></Carousel2>
            <DestinationGalary></DestinationGalary>
        </div>
    );
};

export default Home;