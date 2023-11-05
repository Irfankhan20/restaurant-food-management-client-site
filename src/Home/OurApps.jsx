import { FaApple } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const OurApps = () => {
    return (
        <div>
            <h2 className=' text-2xl md:text-5xl md:mb-8 mb-6 text-center'>Put us in your pocket</h2>
            <div className="bg-[#E21B70] p-11 flex shadow-xl w-full">

                {/* left part */}
                <div className="w-3/4">
                    <h2 className="text-white text-2xl font-medium">Download the food and groceries you love</h2>
                    <div className="flex mt-10">
                        <div className="mr-5"><img className="w-[88px] h-[86px]" src="https://i.ibb.co/BHhLD1Z/qr-scanner.jpg" alt="" /></div>
                        <div>
                            <p className="text-white">It is all at your fingertips - the restaurants and shops you love. <br /> Find the right food and groceries to suit your mood, and <br /> make the first bite last. Go ahead, download us.</p>
                        </div>

                    </div>
                    <div className="flex mt-10 gap-3">
                        <button className="btn btn-active btn-neutral"><FaApple></FaApple>App Store</button>
                        <button className="btn btn-active btn-neutral"><FaAppStore></FaAppStore>Google Play</button>

                    </div>
                </div>

                {/* right part */}
                <div className="w-1/4">
                    <img className="w-[328px] h-[261px] shadow-xl rounded-2xl" src="https://i.ibb.co/59nctpJ/png-ur-apps-pic.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurApps;