
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="bg-gray-900 text-gray-500">
                <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">About Us</h4>
                        <p className="">
                            MeetBox: Where Quality Meets Flavor. Discover a delectable fusion of culinary expertise and the finest ingredients at our restaurant. Savor the ultimate dining experience at MeetBox.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Opening Hours</h4>
                        <p>Monday - Friday: 11:00am - 9:00pm</p>
                        <p>Saturday: 12:00pm - 10:00pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <p>123 Main St</p>
                        <p>New York, NY 10001</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@italianrestaurant.com</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex items-center">
                            
                            <a href="#" className="ml-4 w-9 h-9 hover:text-white transition duration-500"><AiFillFacebook></AiFillFacebook></a>
                            <a href="#" className="ml-4 w-9 h-9 hover:text-white transition duration-500"><AiFillYoutube></AiFillYoutube></a>
                            <a href="#" className="ml-4 w-9 h-9 hover:text-white transition duration-500"><AiOutlineInstagram></AiOutlineInstagram></a>
                            
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex justify-between">
                        <p className="text-sm text-white">© 2023 MEETBOX. All rights reserved.</p>
                        <p className="text-sm text-white">Developed by MD.Irfan Khan Pathan</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;