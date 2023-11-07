import { Helmet } from 'react-helmet';
import '../AddFoodItem/AddFood.css';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const AddFoodItem = () => {
    const { user } = useContext(AuthContext);

    const handleAddFood = e => {

        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const addByName = form.name.value;
        // const addByName = user?.name;
        const addByEmail = user?.email;
        const price = form.price.value;
        const foodCategory = form.foodCategory.value;
        const origin = form.origin.value;
        const quantity = form.quantity.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const newFood = { foodName, addByName, addByEmail, price, foodCategory, origin, quantity, ratings, photo, details };
        console.log(newFood);

        // send data to the server 
        fetch('http://localhost:5000/addfoods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'New Food Added !',
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>MeetBox-Add Food Item</title>
            </Helmet>



            <div className=''>

                <div className='container mx-auto py-10'>
                    <div className='bg-white shadow-2xl px-20 py-10'>
                        {/* title box */}
                        <div className='text-center'>
                            <h1 className='text-5xl custom-font mb-10 '>Add a <span className='text-[#E21B70]' >Food Item</span> </h1>
                        </div>

                        <form onSubmit={handleAddFood}>
                            {/* row 1 */}
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* food name box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="foodName" className="mb-1">Food Name</label>
                                        <input id="foodName" type="text" name="foodName" required placeholder='Enter Food Name' className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* add by name box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="addByName" className="mb-1">Add By Name</label>
                                        <input
                                            //  defaultValue={user?.name}
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
                                            id="addByEmail" name="addByEmail" required placeholder='Enter Your Email (same as user Email)' type="email" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* price box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="price" className="mb-1">Price</label>
                                        <input id="price" name="price" required placeholder='Price' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 3 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* category box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="foodCategory" className="mb-1">Food Category</label>
                                        <select id="foodCategory" name="foodCategory" required className="px-4 py-2 border rounded focus:outline-[#E21B70]">
                                            <option value="">Select Food Category</option>
                                            <option value="Appetizers">Appetizers</option>
                                            <option value="Main Courses">Main Courses</option>
                                            <option value="Side Dishes">Side Dishes</option>
                                            <option value="Desserts">Desserts</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>

                                {/* <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="foodCategory" className="mb-1">Food Category</label>
                                        <input id="foodCategory" name="foodCategory" required placeholder='Enter Food Category(Appetizers/Main Courses/Side Dishes/Desserts)' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div> */}

                                {/* origin box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="origin" className="mb-1">Food Origin</label>
                                        <input id="origin" name="origin" required placeholder='Enter Food Origin' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 4 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* quantity box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="quantity" className="mb-1">Available Quantity</label>
                                        <input id="quantity" name="quantity" required placeholder='Enter Available Quantity' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* rating box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="ratings" className="mb-1">Ratings</label>
                                        <input id="ratings" name="ratings" required placeholder='Enter Ratings' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* row 5 */}
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                {/* food image box */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="photo" className="mb-1">Food Image</label>
                                        <input id="Photo" name="photo" required placeholder='Enter photo URL' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>

                                {/* details box  */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-col">
                                        <label htmlFor="details" className="mb-1">Short Description</label>
                                        <input id="details" name="details" required placeholder='Write Description' type="text" className="px-4 py-2 border rounded focus:outline-[#E21B70]" />
                                    </div>
                                </div>
                            </div>

                            {/* add food button */}
                            <div className="mt-4">
                                <button className="w-full px-4 py-2 bg-[#fc3d90] hover:bg-[#E21B70] hover:text-white text-white font-bold text-lg  rounded-lg shadow-2xl duration-300">Add Food Item</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddFoodItem;