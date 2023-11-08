



const MyOrderFoodItem = ({ order, handleDelete }) => {
    const { _id, name, foodPrice, date, buyerName, quantity } = order;

    

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="w-full">

                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap">{name}</td >
                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap ">{foodPrice}</td >
                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap ">{date}</td >
                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap ">{buyerName}</td >
                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap">{quantity}</td >
                        <td className="w-1/6 pl-32 py-3 whitespace-nowrap">

                            <button onClick={() => handleDelete(_id)} className="ml-4 ">
                                <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                            </button>
                        </td >
                    </tr>

                </thead>
            </table>
        </div>
    );
};

export default MyOrderFoodItem;