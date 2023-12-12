import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import MyAddedFoodItem from "./MyAddedFoodItem";


const MyAddedFoodItems = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [adds, setAdds] = useState([]);


    useEffect(() => {
        const url = `https://assignment-eleven-server-side-rho.vercel.app/addedfoods?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdds(data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-My Added Food Items</title>
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
                                <h2 className='text-6xl font-semibold'>My Added Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Added Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Added Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Added Food Items</h2>
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

            <div>
                {/* title box */}
                <div className='text-center mt-20'>
                            <h1 className='text-5xl custom-font '>My Added <span className='text-[#E21B70]' >Food Items</span> </h1>
                        </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {
                    adds.map((add) => <MyAddedFoodItem key={add._id} add={add}></MyAddedFoodItem>)
                }
            </div>
            </div>

        </div>
    );
};

export default MyAddedFoodItems;