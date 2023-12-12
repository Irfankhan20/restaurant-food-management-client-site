import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";


const SingleFoodPage = () => {
    const foodItem = useLoaderData();
    const { photo, foodName, price, foodCategory, addByName, origin } = foodItem;
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-SingleFoodPage</title>
            </Helmet>
            {/* slider div  */}
            <div>
                <div className="carousel w-full h-[400px]">
                    {/*  */}

                    <div id="slide1" className="carousel-item relative w-full ">
                        <img className="w-full" src="https://i.ibb.co/whcGY7k/spicy-1.jpg" alt="" />
                        {/* banner1 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text1*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>Single Food Page</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>

                            </div>
                        </div>
                        {/*banner1 scroll bar1 */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide4" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>

                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/K9bQxw9/pizza.jpg" className="w-full" />
                        {/* banner2 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>Single Food Page</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>

                            </div>
                        </div>
                        {/*banner2 scroll bar */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide1" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/nmCv4bL/dessert-item.jpg" className="w-full" />
                        {/* banner3 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>Single Food Page</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>

                            </div>
                        </div>
                        {/*banner3 scroll bar */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide2" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/YjkbjFJ/salad-potatoes-and-bread1.jpg" className="w-full " />
                        {/* banner4 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text1*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>Single Food Page</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>

                            </div>
                        </div>
                        {/*banner4 scroll bar1 */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide3" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* single food item info div  */}
            <div className="flex gap-6 max-w-7xl mx-auto mt-32">
                {/* left part */}
                <div className="w-3/4">
                    <img className="shadow-xl w-[752px] h-[400px]" src={photo} alt="" />
                    <h2 className="text-[35px] font font-semibold pt-12">{foodName}</h2>
                    <p className="pt-8 pb-8 text-xl font-semibold">FoodCategory: <span className="bg-[#E21B70] text-white p-2 rounded-xl">{foodCategory}</span></p>
                    <p className=" text-xl font-semibold">Made By: <span className="bg-[#E21B70] text-white p-2 rounded-xl">{addByName}</span></p>
                    <p className="pt-8 text-xl font-semibold">Country: <span className="bg-[#E21B70] text-white p-2 rounded-xl">{origin}</span> </p>
                    <p className="pt-8 pb-8 text-[#737373]">
                        Cupcakes are a popular and delightful dessert that consists of individual, small cakes baked in a cup-shaped mold, typically made from paper or foil. These sweet treats are loved for their compact size and delicious flavors. Cupcakes come in a variety of flavors, from classic chocolate and vanilla to more exotic options like red velvet, lemon, or even specialty flavors such as salted caramel or matcha. <br />

                    </p>
                    <div className="flex justify-between mb-8">
                        <div className="w-[364px] ml-16 h-[204px] rounded-lg border-t-2 border-[#E21B70]  p-3 bg-[#F3F3F3]">
                            <h2 className="text-xl font-semibold">Quality Food</h2>
                            <p className="text-[#737373] pt-2">Indulge in a culinary journey of pure delight at our restaurant, where quality is not just a standard but a commitment. Our dishes are crafted with passion, using the finest ingredients, to deliver a memorable dining experience.</p>
                        </div>
                        <div className="w-[364px] mr-16 h-[204px] rounded-lg border-t-2 border-[#E21B70] p-3 bg-[#F3F3F3]">
                            <h2 className="text-xl font-semibold">24/7 Quality Service</h2>
                            <p className="pt-2 text-[#737373]">Experience our unwavering commitment to 24/7 quality service, where we go the extra mile to ensure your dining experience is exceptional at any hour. Our dedicated team is here to serve you with warmth and efficiency, ensuring your satisfaction and comfort every time.</p>
                        </div>
                    </div>

                    <p className="text-[#737373] pb-12">Cupcakes are known for their versatility and can be customized with a wide range of frostings and toppings, including buttercream, cream cheese frosting, sprinkles, fruit, or even edible decorations. They are often beautifully decorated and make for a visually appealing dessert.</p>

                    <h2 className="text-[35px] font-semibold pb-8">3 Simple Steps to Making Food</h2>

                    <div className="flex justify-center gap-9">
                        <div className="w-[235px] shadow-xl rounded-lg border border-[#E21B70]">
                            <div className="w-[83px] mx-auto mt-7 h-[83px] bg-[#E21B70] rounded-full"><h2 className="ml-8 pt-8 text-white font-bold text-xl">01</h2></div>
                            <h2 className="text-center pt-5 pb-5 text-xl font-semibold">STEP ONE</h2>
                            <p className="p-3 text-[#737373]"><span className="font-bold">Preparation:</span> Our skilled chefs begin by carefully selecting the finest ingredients, ensuring that every component of your dish is of the highest quality.</p>

                        </div>
                        <div className="w-[235px] shadow-xl rounded-lg border border-[#E21B70]">
                            <div className="w-[83px] mx-auto mt-7 h-[83px] bg-[#E21B70] rounded-full"><h2 className="ml-8 pt-8 text-white font-bold text-xl">02</h2></div>
                            <h2 className="text-center pt-5 pb-5 text-xl font-semibold">STEP TWO</h2>
                            <p className="p-3 text-[#737373]"><span className="font-bold">Cooking:</span> With precision and artistry, our culinary experts transform these ingredients into delectable dishes, paying attention to detail and flavor in every step.</p>

                        </div>
                        <div className="w-[235px] shadow-xl rounded-lg border border-[#E21B70]">
                            <div className="w-[83px] mx-auto mt-7 h-[83px] bg-[#E21B70] rounded-full"><h2 className="ml-8 pt-8 text-white font-bold text-xl">03</h2></div>
                            <h2 className="text-center pt-5 pb-5 text-xl font-semibold">STEP THREE</h2>
                            <p className="p-3 text-[#737373]"><span className=" font-bold">Presentation:</span> We take pride in creating visually appealing, mouthwatering plates of food that are sure to delight your senses and enhance your dining experience.</p>

                        </div>

                    </div>

                    <div className="mt-8">
                        <h2 className="text-center text-2xl font-semibold pb-10 pt-10">Our Shafe</h2>
                        <img className="w-full h-[400px]" src="https://i.ibb.co/xmbdp2c/shafe-2.jpg" alt="" />
                    </div>

                </div>
                {/* right part */}
                <div className="w-1/4">
                    <div className="bg-black text-white mb-8">
                        <img src="https://i.ibb.co/JdkYr3N/Whats-App-Image-2023-11-06-at-6-45-52-PM.jpg" alt="" />
                        <h2 className="text-xl font-semibold text-center pt-5 pb-8">Are You Hungry? Do not Worry!! We Are Here</h2>
                        <div className="relative">
                            <div className="mx-auto bg-white w-[270px] h-[126px]">
                                <h2 className="text-black text-xl font-semibold text-center pt-5"><span className="text-[#E21B70] ">MeetBox</span> Special</h2>
                                <p className="text-[#737373] text-center font-semibold">Save up to <span className="text-[#E21B70]">60% off</span></p>
                            </div>
                            <div className="absolute right-5  top-3/4 bg-[#E21B70] w-[170px] ">
                                <h2 className="text-black font-semibold text-center  py-4 px-8">Promo Code: <span className="text-white ">PH.HERO143</span></h2>
                            </div>
                        </div>

                        <h2 className="text-[35px] font-semibold pt-20 pl-4 pb-8">Price: {price} TK</h2>
                    </div>
                    
                    <Link to={`/checkout/${foodItem?._id}`}><button className="w-full py-4 bg-[#E21B70] text-white text-xl font-semibold rounded-md">Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodPage;

