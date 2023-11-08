import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import MyOrderFoodItem from "./MyOrderFoodItem";
import Swal from "sweetalert2";


const MyOrderFoodItems = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // const [myOrders, setMyOrders] = useState(orders);
    console.log(user.email);

    useEffect(() => {
        const url = `http://localhost:5000/orderFoods?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, []);

    const handleDelete = (id) => {

        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/orderFoods/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = orders.filter(t => t._id !== id);
                            setOrders(remaining);
                        }
                    }

                    )
            }
        })
    }

    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-My Ordered Food Items</title>
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
                                <h2 className='text-6xl font-semibold'>My Ordered Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Ordered Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Ordered Food Items</h2>
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
                                <h2 className='text-6xl font-semibold'>My Ordered Food Items</h2>
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

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Food Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Food Price</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Order Date</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Food Owner</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Quantity</th>
                            <th className="px-6 py-3 border-b-2 border-gray-200">Action Button</th>
                            
                        </tr>
                    </thead>

                </table>


                {
                    orders.map((order) => <MyOrderFoodItem
                     key={order._id}
                      order={order} 
                      handleDelete={handleDelete}
                      ></MyOrderFoodItem>)
                }
            </div>


        </div>
    );
};

export default MyOrderFoodItems;