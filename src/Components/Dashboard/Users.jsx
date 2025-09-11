import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../Services/apiClient";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const Users = () => {
    const axiosSecure = apiClient();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure to make this user as Staff?",
            text: "Please check the conditions!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Done!",
                    text: "This user is staff now.",
                    icon: "success"
                });
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then((res) => {
                        console.log(res);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div className="bg-base-200 h-fit min-h-screen w-full -mt-10 pb-20 lg:pb-80 py-7">
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"---How many??---"} />
            <div className="p-2 lg:p-6 bg-white rounded-sm shadow max-w-7xl mx-auto">
                <div className="uppercase font-bold text-sm lg:text-xl">
                    <p>Total Users: {users.length}</p>
                </div>
                <div className="bg-[#D1A054] flex justify-between text-white text-sm lg:text-xl font-medium uppercase mt-4 lg:mt-6 rounded-t-lg py-4 px-2">
                    <p>Number: </p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Role</p>
                    <p>Action</p>
                </div>
                <div className="mt-4 lg:mt-6">
                    {users.map((user, idx) => (
                        <div key={user._id}>
                            <div className="flex items-center justify-between font-medium p-2 text-sm lg:text-lg">
                                <p className="flex-1">{idx + 1}</p>
                                <p className="flex-1">{user.name}</p>
                                <p className="flex-1">{user.email}</p>
                                <p className="flex-1">
                                    {user.role === 'admin' ? (
                                        <button
                                            className="bg-[#D1A054] p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5 transition-all duration-150"
                                        >
                                            <GrUserAdmin />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="bg-[#D1A054] p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5 transition-all duration-150"
                                        >
                                            <FaUser />
                                        </button>
                                    )}
                                </p>
                                <button
                                    onClick={() => handleDeleteUser(user)}
                                    className="bg-red-500 p-2 rounded-sm text-white cursor-pointer hover:-translate-y-0.5 transition-all duration-150"
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

export default Users;