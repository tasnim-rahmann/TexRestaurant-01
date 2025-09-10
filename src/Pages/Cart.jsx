import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../Components/Shared/SectionTitle";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import apiClient from "../Services/apiClient";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = apiClient();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="bg-base-200 h-fit min-h-screen w-full -mt-10 pb-20 lg:pb-80 py-7">
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
                                <button
                                    className="bg-red-500 p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    <RiDeleteBin6Line />
                                </button>
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