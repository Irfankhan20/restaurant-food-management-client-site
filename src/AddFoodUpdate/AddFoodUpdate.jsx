import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const AddFoodUpdate = () => {
    const {user} = useContext(AuthContext);
    const updateaddfood = useLoaderData();
    const {_id, foodName, price,foodCategory, origin, quantity, ratings, photo, details} = updateaddfood;
    console.log(foodName,price);

    


    const handleUpdateFood=event=>{
        event.preventDefault();
        const form = event.target;
        const foodName=form.foodName.value;
        const name=form.name.value;
        const addByEmail=form.addByEmail.value;
        const price=form.price.value;
        const foodCategory=form.foodCategory.value;
        const origin=form.origin.value;
        const quantity=form.quantity.value;
        const ratings=form.ratings.value;
        const photo=form.photo.value;
        const details=form.details.value;

        const updatedFood={foodName,name,addByEmail,price,foodCategory,origin,quantity,ratings,photo,details}
        console.log(updatedFood)

        // send data to the server 
        fetch(`https://assignment-eleven-server-side-rho.vercel.app/addfoodupdate/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateaddfood)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Food Updated !',
                    text: 'Explore the MeetBox',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
            form.reset();
        })
          // send data to the server 

    }

    

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-Update Add Food Items</title>
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
                                <h2 className='text-6xl font-semibold'>update Add Food Item</h2>
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
                                <h2 className='text-6xl font-semibold'>update Add Food Item</h2>
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
                                <h2 className='text-6xl font-semibold'>update Add Food Item</h2>
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
                                <h2 className='text-6xl font-semibold'>update Add Food Item</h2>
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



            <div className=''>

                <div className='container mx-auto py-10'>
                    <div className='bg-white shadow-2xl px-20 py-10'>
                        {/* title box */}
                        <div className='text-center'>
                            <h1 className='text-5xl custom-font mb-10 '>Update Add <span className='text-[#E21B70]' >Food Item</span> </h1>
                        </div>

                        <form onSubmit={handleUpdateFood}>
                            {/* row 1 */}
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* food name box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="foodName" className="mb-1">Food Name</label>
                                        <input defaultValue={foodName} id="foodName" type="text" name="foodName" required placeholder='Enter Food Name' className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* add by name box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="addByName" className="mb-1">Add By Name</label>
                                        <input
                                             defaultValue={user?.displayName} readOnly
                                            id="addBy"
                                            name="name" required placeholder='Enter Your Name' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 2 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* email box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="addByEmail" className="mb-1">Add By Email</label>
                                        <input
                                            defaultValue={user?.email} 
                                            readOnly
                                            id="addByEmail" name="addByEmail" required placeholder='Enter Your Email (same as user Email)' type="email" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* price box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="price" className="mb-1">Price</label>
                                        <input defaultValue={price} id="price" name="price" required placeholder='Price' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 3 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* category box */}
                                

                                <div className="w-full md:w-1/2">
                                <div className="flex flex-col">
                                    <label htmlFor="foodCategory" className="mb-1">Food Category</label>
                                    <input defaultValue={foodCategory} id="foodCategory" name="foodCategory" required placeholder='Enter Food Category(Appetizers/Main Courses/Side Dishes/Desserts)' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                </div>
                            </div>

                                {/* origin box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="origin" className="mb-1">Food Origin</label>
                                        <input defaultValue={origin} id="origin" name="origin" required placeholder='Enter Food Origin' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 4 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* quantity box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="quantity" className="mb-1">Available Quantity</label>
                                        <input defaultValue={quantity} id="quantity" name="quantity" required placeholder='Enter Available Quantity' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* rating box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="ratings" className="mb-1">Ratings</label>
                                        <input defaultValue={ratings} id="ratings" name="ratings" required placeholder='Enter Ratings' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 5 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* food image box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="photo" className="mb-1">Food Image</label>
                                        <input defaultValue={photo} id="Photo" name="photo" required placeholder='Enter photo URL' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* details box  */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="details" className="mb-1">Short Description</label>
                                        <input defaultValue={details} id="details" name="details" required placeholder='Write Description' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* add food button */}
                            <div className="mt-4">
                                <button className="w-full px-4 py-2 bg-[#fc3d90] hover:bg-[#E21B70] hover:text-white text-white font-bold text-lg  rounded-lg shadow-2xl duration-300">Update Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddFoodUpdate;