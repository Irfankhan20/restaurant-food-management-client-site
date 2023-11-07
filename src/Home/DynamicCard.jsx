import { Link } from "react-router-dom";

const DynamicCard = ({foodItem}) => {
    return (
        <div className='my-16 md:w-94 w-11/12 mx-auto'>
        <div className="card bg-base-100 shadow-xl">
          <figure><img className='object-cover image-full w-[485px] h-[485px]' src={foodItem.photo} alt="image" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {foodItem.foodName}
              
            </h2>
            <div className="badge bg-[#E21B70] text-white border-none py-3">{foodItem.foodCategory} Food Category</div>
            
            <p>Price : {foodItem.price} TK</p>
  
            <div className="card-actions justify-end">
              <Link to='/singlefoodpage'>
                <button className='border border-[#E21B70] rounded-full px-4 py-2 hover:bg-[#E21B70] hover:text-white duration-300'>Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DynamicCard;