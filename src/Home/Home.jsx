
import Banner from "./Banner";
import OurApps from "./OurApps";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mt-32">
            <OurApps></OurApps>
            </div>
            
        </div>
    );
};

export default Home;