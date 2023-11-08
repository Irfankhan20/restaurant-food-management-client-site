
import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurApps from "./OurApps";
import SixCard from "./SixCard";


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
            <OurApps></OurApps>
            
            </div>
            
        </div>
    );
};

export default Home;