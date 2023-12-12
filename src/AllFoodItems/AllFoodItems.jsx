import { useEffect, useState } from "react";
import AllFoodItem from "./AllFoodItem";
import { Helmet } from "react-helmet";
// import { useLoaderData } from "react-router-dom";



const AllFoodItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    // const [searchFoodItems, setSearchFoodItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    //------------------------------------------------------------------------
    //  pagination code 
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://assignment-eleven-server-side-rho.vercel.app/foodItemsCount')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);

            })
    }, [])
    // console.log(count);
    // const count = 10;
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const url = `https://assignment-eleven-server-side-rho.vercel.app/allfoods?page=${currentPage}&size=${itemsPerPage}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoodItems(data)
                // console.log(data);
            })
    }, [url, currentPage, itemsPerPage])

    //------------------------------------------------------------------------
    // search and banner and card code 
    const handleSearchChange = (event) => {
        fetch(`https://assignment-eleven-server-side-rho.vercel.app/allfoods?page=${currentPage}&size=${itemsPerPage}&search=${event.target.value}`)

        .then(res => res.json())
        .then(data => {
            setFoodItems(data)
            // console.log(data);
        })
        setSearchValue(event.target.value);
    };

    

    // Filter food items based on the search input
    const filteredFoodItems = foodItems.filter(foodItem => {
        return foodItem.foodName.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (

        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-All Food Items</title>
            </Helmet>

            {/* slider div  */}
            <div>
                <div className="carousel w-full h-[500px]">
                    {/*  */}

                    <div id="slide1" className="carousel-item relative w-full ">
                        <img className="w-full" src="https://i.ibb.co/whcGY7k/spicy-1.jpg" alt="" />
                        {/* banner1 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
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
                        <img src="https://i.ibb.co/K9bQxw9/pizza.jpg" className="w-full" />
                        {/* banner2 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
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
                        <img src="https://i.ibb.co/nmCv4bL/dessert-item.jpg" className="w-full" />
                        {/* banner3 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
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
                        <img src="https://i.ibb.co/YjkbjFJ/salad-potatoes-and-bread1.jpg" className="w-full " />
                        {/* banner4 text,btn */}
                        <div className='absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
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

            {/* pagination div */}
            <div className="text-center mb-10 ">
                <button className="bg-white p-2 rounded-lg mr-4 hover:bg-[#E21B70]  hover:text-white text-[#fc3d90] border-2 border-[#E21B70]" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'bg-[#E21B70] text-white rounded-full p-2 px-4 ml-4 mr-4' : 'mr-4 ml-4'}

                        key={page}
                        onClick={() => setCurrentPage(page)}
                    >{page}</button>)
                }
                <button className="bg-white p-2 rounded-lg ml-4 hover:bg-[#E21B70]  hover:text-white text-[#fc3d90] border-2 border-[#E21B70]" onClick={handleNextPage}>Next</button>
                <select className="border-2 ml-2  border-[#E21B70] text-white bg-[#E21B70] " value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option className="hover:text-[#E21B70] hover:bg-white hover:border-[#E21B70]" value="5">5</option>
                    <option className="hover:text-[#E21B70] hover:bg-white hover:border-[#E21B70]" value="10">10</option>
                    <option className="hover:text-[#E21B70] hover:bg-white hover:border-[#E21B70]" value="20">20</option>
                    <option className="hover:text-[#E21B70] hover:bg-white hover:border-[#E21B70]" value="50">50</option>
                </select>
            </div>


        </div>

    );
};

export default AllFoodItems;