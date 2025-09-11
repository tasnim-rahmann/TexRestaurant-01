import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import SectionTitle from "../Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import apiClient from "../../Services/apiClient";

const ManageItem = () => {
    const { menu, refetch } = useMenu();
    const axiosSecure = apiClient();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                refetch();
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };

    const handleEdit = (item) => {
        console.log(item);
    };

    return (
        <div className="bg-base-200 h-fit min-h-screen w-full -mt-10 pb-20 lg:pb-80 py-7">
            <SectionTitle heading={"My Cart Items"} subHeading={"---My Cart---"} />
            <div className="p-2 lg:p-6 bg-white rounded-sm shadow max-w-7xl mx-auto">
                <div className="flex justify-between items-center uppercase font-bold text-sm lg:text-xl">
                    <p>Total Items: {menu.length}</p>
                </div>
                <div className="bg-[#D1A054] flex justify-between text-white text-sm lg:text-xl font-medium uppercase mt-4 lg:mt-6 rounded-t-lg py-4 px-2">
                    <p>Number: </p>
                    <p>Item Name</p>
                    <p>Price</p>
                    <div className="flex gap-2 lg:gap-12">
                        <p>Edit</p>
                        <p>Delete</p>
                    </div>
                </div>
                <div className="mt-4 lg:mt-6">
                    {menu.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex items-center justify-between font-medium p-2 text-sm lg:text-lg">
                                <p>{idx + 1}</p>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <div className="flex gap-2 lg:gap-24">
                                    <button
                                        className="bg-[#D1A054] p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5"
                                        onClick={() => handleEdit(item)}
                                    >
                                        <FiEdit />
                                    </button>
                                    <button
                                        className="bg-red-500 p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5"
                                        onClick={() => handleDeleteItem(item)}
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageItem;