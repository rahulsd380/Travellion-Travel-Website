import Blog from "../Blog/Blog";
import Navbar from "../Navbar/Navbar";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SepcialOffer from "../SpecialOffer/SepcialOffer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PopularDestinations></PopularDestinations>
            <SepcialOffer></SepcialOffer>
            <Blog></Blog>
        </div>
    );
};

export default Home;