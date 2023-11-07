import { useEffect, useState } from "react";
import AllFoodItem from "./AllFoodItem";


const AllFoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const url = 'http://localhost:5000/allfoods';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoodItems(data)
            })
    }, [url])

    // Filter food items based on the search input
    const filteredFoodItems = foodItems.filter(foodItem => {
        return foodItem.foodName.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (

        <div>

            {/* slider div  */}
            <div>
                <div className="carousel w-full h-[400px]">
                    {/*  */}

                    <div id="slide1" className="carousel-item relative w-full ">
                        <img className="w-full rounded-lg" src="https://i.ibb.co/whcGY7k/spicy-1.jpg" alt="" />
                        {/* banner1 text,btn */}
                        <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text1*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>All Food Items</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>
                                <div className="mt-12 mb-52">
                                    <input className="w-[470px] text-black py-4 pl-4 border border-[#DEDEDE] rounded-l-lg" value={searchValue}
                                        onChange={handleSearchChange} type="text" placeholder="Search here...." />
                                    <button className="bg-[#E21B70] text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
                                </div>
                            </div>
                        </div>
                        {/*banner1 scroll bar1 */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide4" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>

                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/K9bQxw9/pizza.jpg" className="w-full rounded-lg" />
                        {/* banner2 text,btn */}
                        <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>All Food Items</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>
                                <div className="mt-12 mb-52">
                                    <input className="w-[470px] text-black py-4 pl-4 border border-[#DEDEDE] rounded-l-lg" value={searchValue}
                                        onChange={handleSearchChange} type="text" placeholder="Search here...." />
                                    <button className="bg-[#E21B70] text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
                                </div>
                            </div>
                        </div>
                        {/*banner2 scroll bar */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide1" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/nmCv4bL/dessert-item.jpg" className="w-full rounded-lg" />
                        {/* banner3 text,btn */}
                        <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>All Food Items</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>
                                <div className="mt-12 mb-52">
                                    <input className="w-[470px] text-black py-4 pl-4 border border-[#DEDEDE] rounded-l-lg" value={searchValue}
                                        onChange={handleSearchChange} type="text" placeholder="Search here...." />
                                    <button className="bg-[#E21B70] text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
                                </div>
                            </div>
                        </div>
                        {/*banner3 scroll bar */}
                        <div className="absolute flex bottom-0 gap-6 justify-end transform -translate-y-1/2 right-5 left-5">
                            <a href="#slide2" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#fc3d90] text-white hover:bg-[#E21B70] hover:text-white border-0">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/YjkbjFJ/salad-potatoes-and-bread1.jpg" className="w-full rounded-lg" />
                        {/* banner4 text,btn */}
                        <div className='absolute flex items-center rounded-lg h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                            {/* banner text1*/}
                            <div className='text-white space-y-7 pl-12 w-full'>
                                <h2 className='text-6xl font-semibold'>All Food Items</h2>
                                <h2 className='text-6xl text-[#E21B70] font-semibold'>MeetBox</h2>
                                <div className="mt-12 mb-52">
                                    <input className="w-[470px] text-black py-4 pl-4 border border-[#DEDEDE] rounded-l-lg" value={searchValue}
                                        onChange={handleSearchChange} type="text" placeholder="Search here...." />
                                    <button className="bg-[#E21B70] text-white rounded-r-lg py-4 px-7 text-center font-semibold">Search</button>
                                </div>
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


            {/* card div  */}
            <div className='max-w-7xl mx-auto grid lg:grid-cols-3 justify-items-center'>
                {filteredFoodItems.map(foodItem => <AllFoodItem key={foodItem._id} foodItem={foodItem}></AllFoodItem>

                )}
            </div>


        </div>
        
    );
};

export default AllFoodItems;