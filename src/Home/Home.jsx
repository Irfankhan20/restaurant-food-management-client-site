
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import OurApps from "./OurApps";
import SixCard from "./SixCard";


const Home = () => {
    return (
        <div>
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