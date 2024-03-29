import Blog from "../Blog/Blog";
import DestinationGalary from "../DestinationGalary/DestinationGalary";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SepcialOffer from "../SpecialOffer/SepcialOffer";
import Testimonials from "../Testimonials/Testimonials";
import { Carousel2 } from "../Trip/Trip";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularDestinations></PopularDestinations>
            <SepcialOffer></SepcialOffer>
            <Blog></Blog>
            <Carousel2></Carousel2>
            <DestinationGalary></DestinationGalary>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;