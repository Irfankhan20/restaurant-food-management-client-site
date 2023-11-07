import {  useEffect, useState } from "react";
import DynamicCard from "./DynamicCard";
import { Link } from "react-router-dom";

// import { AuthContext } from "../Provider/AuthProvider";


const SixCard = () => {
    // const {user} = useContext(AuthContext);
    const [foodItems, setFoodItems] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    const url = 'http://localhost:5000/allfoods';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoodItems(data)
            })
    }, [url])


    return (
        <div className='mt-32'>
            <h2 className='text-[#E21B70] text-2xl md:text-5xl text-center'>All Foods Item</h2>
            <div className='grid lg:grid-cols-3 justify-items-center'>
                {foodItems.slice(0 , dataLength).map(foodItem => <DynamicCard key={foodItem._id} foodItem={foodItem}></DynamicCard> 
                
                )}
            </div>
            <div className={dataLength >= foodItems.length ? 'hidden' : 'text-center pb-10'}>
            <Link to="/allfooditems">
            <button onClick={()=> setDataLength(foodItems.length)} className="border border-[#E21B70] rounded-full px-4 py-2 hover:bg-[#E21B70] hover:text-white duration-300">Show More</button>
            </Link>
            </div>
        </div>
    );
};

export default SixCard;