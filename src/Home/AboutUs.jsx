import { motion, useAnimation  } from 'framer-motion';
import { useEffect } from 'react';

const AboutUs = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ scale: 1.2 });
    }, [controls]);
    return (
        <div className=' md:my-20 w-full mt-32 mb-32'>
            <div className="container mx-auto lg:flex lg:flex-row items-center">
                <div className="md:w-1/2">
                    <motion.div
                        animate={controls}
                        whileHover={{ scale: 1.3 }} 
                        transition={{ duration: 0.3 }} 
                    >
                        <img src="https://i.ibb.co/f8LCZ2W/about-1.jpg" alt="About Us Image" className="md:w-10/12 object-cover rounded-xl shadow-xl shadow-gray-500 duration-200" />
                    </motion.div>
                    
                </div>
                <div className="md:w-1/2 ">
                    <div className="my-8 lg:my-0">
                        <h2 className='text-[#E21B70] text-2xl md:text-5xl md:mb-6 mb-4'>About Us</h2>
                        <p className="text-gray-700 mb-4">
                            At our Italian restaurant, we strive to bring the best of Italy to your table. Our love for Italian food and culture has inspired us to create a welcoming atmosphere where you can savor the flavors of the Mediterranean. Our chefs use only the freshest and finest ingredients to create authentic Italian dishes that are bursting with flavor. From classic pasta dishes to wood-fired pizzas, our menu has something for everyone. We take pride in our warm and friendly service, ensuring that each guest feels at home from the moment they walk through our doors. Come dine with us and experience a little slice of Italy in the heart of your city.

                        </p>
                        <button className="bg-[#e75494] text-white font-bold py-2 px-4 rounded hover:bg-[#E21B70]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;