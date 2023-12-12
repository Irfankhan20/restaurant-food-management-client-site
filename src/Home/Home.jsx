
import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurApps from "./OurApps";
import SixCard from "./SixCard";
import FoodGallery from "./FoodGallery";
import Contact from "./Contact";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-Home Page</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <SixCard></SixCard>
            <AboutUs></AboutUs>
            <FoodGallery></FoodGallery>
            <Contact></Contact>
            <OurApps></OurApps>
            
            </div>
            
        </div>
    );
};

export default Home;