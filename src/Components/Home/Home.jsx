import Navbar from "../Navbar/Navbar";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SepcialOffer from "../SpecialOffer/SepcialOffer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PopularDestinations></PopularDestinations>
            <SepcialOffer></SepcialOffer>
        </div>
    );
};

export default Home;