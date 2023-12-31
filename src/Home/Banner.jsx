import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center md:h-screen h-72 banner-image" style={{ backgroundImage: 'url("https://i.ibb.co/ss4Bsfc/ingredients-near-pizza.jpg")' }}>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="md:w-9/12 mx-auto text-2xl md:text-5xl text-white font-bold leading-tight mb-4 line-">Delight in Culinary Excellence at our <span className='text-[#E21B70] italic text-3xl md:text-6xl'>MeetBox</span> Restaurant </h1>
                        <p className="text-sm md:text-xl text-white mb-8 md:w-8/12 w-10/12 mx-auto">
                            
                            <Typewriter
                                options={{
                                    strings: ['MeetBox: Satisfying Every Craving ✍️' ,' Experience a World of Flavor. ✍️'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                        <div className="flex justify-center md:mb-0 ">
                            <button className="border border-[#E21B70] hover:bg-white hover:text-[#E21B70] text-white font-semibold btn-secondary py-2 px-4 rounded shadow mr-4 duration-300">View Menu</button>
                            <button className="border border-white hover:bg-white text-[#E21B70] font-semibold py-2 px-4 rounded shadow mr-4 duration-300">Our Foods</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;