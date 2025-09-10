import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../Components/Shared/SectionTitle";
import useCart from "../Hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className="bg-base-200 h-fit w-full -mt-10 py-7">
            <SectionTitle heading={"My Cart Items"} subHeading={"---My Cart---"} />
            <div className="p-2 lg:p-6 bg-white rounded-sm shadow max-w-7xl mx-auto">
                <div className="flex justify-between items-center uppercase font-bold text-sm lg:text-xl">
                    <p>Total Orders: {cart.length}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <button className="px-4 py-1 bg-[#D1A054] rounded-sm text-white cursor-pointer">Pay</button>
                </div>
                <div className="bg-[#D1A054] flex justify-between text-white text-sm lg:text-xl font-medium uppercase mt-4 lg:mt-6 rounded-t-lg py-4 px-2">
                    <p>Number: </p>
                    <p className="mr-0 lg:mr-64">Item Name</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>
                <div className="mt-4 lg:mt-6">
                    {cart.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex items-center justify-between font-medium p-2 text-sm lg:text-lg">
                                <p className="flex-1">{idx + 1}</p>
                                <p className="flex-2">{item.name}</p>
                                <p className="flex-1">{item.price}</p>
                                <button className="bg-red-500 p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5"><RiDeleteBin6Line /></button>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Cart;