import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const foodItem = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleFoodPurchase = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const foodPrice = form.foodPrice.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        
        const orderInfo = { name, buyerName, buyerEmail, foodPrice, quantity, date };
        console.log(orderInfo);

        // send data to the server 
        fetch('http://localhost:5000/orderedfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'New Food Ordered !',
                        text: 'Explore the MeetBox Restaurant',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();

                }
            })
    }
    return (
        <div>
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
                                <h2 className='text-6xl font-semibold'>Check Out</h2>
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
                                <h2 className='text-6xl font-semibold'>Check Out</h2>
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
                                <h2 className='text-6xl font-semibold'>Check Out</h2>
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
                                <h2 className='text-6xl font-semibold'>Check Out</h2>
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

            {/* input box  */}
            <div className='container mx-auto py-10'>
                <div className='bg-white shadow-2xl px-20 py-10'>
                    {/* title box */}
                    <div className='text-center'>
                        <h1 className='text-5xl custom-font mb-10 '>Check Out <span className='text-[#E21B70]' >Food Item</span> </h1>
                    </div>

                    <form onSubmit={handleFoodPurchase}>
                        {/* row 1 */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* food name box */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="foodName" className="mb-1">Food Name</label>
                                    <input defaultValue={foodItem?.foodName} readOnly id="foodName" type="text" name="name" required placeholder='Enter Food Name' className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                </div>
                            </div>

                            {/* add by name box */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="addByName" className="mb-1">Buyer Name</label>
                                    <input
                                        defaultValue={user?.displayName} // Set the default value to displayName
                                        id="addByName"
                                        name="buyerName"
                                        required
                                        placeholder='Enter Your Name'
                                        type="text"
                                        className="px-4 py-2 border rounded focus:outline-[#E21B70]"
                                        readOnly // Make the input read-only
                                    />
                                </div>
                            </div>
                        </div>

                        {/* row 2 */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            {/* email box */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="addByEmail" className="mb-1">Buyer Email</label>
                                    <input
                                        defaultValue={user?.email}
                                        id="addByEmail" name="buyerEmail" required placeholder='Enter Your Email (same as user Email)' type="email" className="px-4 py-2 border rounded focus:outline-[#E21B70]" readOnly />
                                </div>
                            </div>

                            {/* price box */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="foodName" className="mb-1">Price</label>
                                    <input defaultValue={foodItem?.price} readOnly id="foodPrice" type="text" name="foodPrice" required placeholder='Enter Food Name' className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                </div>
                            </div>
                        </div>

                        {/* row 3 */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            {/* Quantity box */}

                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="price" className="mb-1">Quantity</label>
                                    <input id="price" name="quantity" required placeholder='food quantity' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                </div>
                            </div>



                            {/* Buying date box */}
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="date" className="mb-1">Buying Date</label>
                                    <input type="date" name="date" id="date" required className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                </div>
                            </div>
                        </div>



                        {/* add food button */}
                        <div className="mt-4">
                            <button className="w-full px-4 py-2 bg-[#fc3d90] hover:bg-[#E21B70] hover:text-white text-white font-bold text-lg  rounded-lg shadow-2xl duration-300">Food Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;