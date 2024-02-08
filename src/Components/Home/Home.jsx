import Blog from "../Blog/Blog";
import DestinationGalary from "../DestinationGalary/DestinationGalary";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SepcialOffer from "../SpecialOffer/SepcialOffer";
import Testimonials from "../Testimonials/Testimonials";
import { Carousel2 } from "../Trip/Trip";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Testimonials></Testimonials>
            <Hero></Hero>
            <PopularDestinations></PopularDestinations>
            <SepcialOffer></SepcialOffer>
            <Blog></Blog>
            <Carousel2></Carousel2>
            <DestinationGalary></DestinationGalary>
            <Footer></Footer>
        </div>
    );
};

export default Home;