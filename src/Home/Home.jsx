
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurApps from "./OurApps";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <AboutUs></AboutUs>
            <OurApps></OurApps>
            
            </div>
            
        </div>
    );
};

export default Home;