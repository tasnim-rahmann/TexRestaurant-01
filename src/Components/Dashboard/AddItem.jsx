import { FaSpoon } from "react-icons/fa6";
import SectionTitle from "../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import apiClient from "../../Services/apiClient";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KYE;
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_kye}`;

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = apiClient();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.display_url
            };
            const response = await axiosSecure.post('/menu', menuItem);
            if (response.data.insertedId) {
                setIsLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Item Added Successfuly!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto m-2">
            <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"} />
            <div className="bg-base-300 p-4 lg:p-12 rounded-sm shadow">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="text-sm font-medium">Recipe name*</label>
                        <input
                            type="text"
                            className="w-full bg-white focus:outline-0 h-12 rounded-sm mt-2 p-4"
                            placeholder="Enter The Recipe Name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mt-4 flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium">Category*</label>
                            <select
                                type="text"
                                className="px-4 w-full bg-white focus:outline-0 h-12 rounded-sm mt-2"
                                {...register("category", { required: true })}
                                defaultValue="default"
                            >
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Desert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium">Price*</label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="p-4 w-full bg-white focus:outline-0 h-12 rounded-sm mt-2"
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-medium">Recipe Details*</label>
                        <textarea
                            className="p-4 w-full min-h-52 bg-white focus:outline-0 rounded-sm mt-2"
                            placeholder="Recipe Details"
                            {...register("details")}
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <input
                            type="file"
                            className="mt-2 block w-full text-sm text-gray-700
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-sm file:border-0
                            file:text-sm file:font-medium
                            file:bg-base-200 file:text-black
                            cursor-pointer"
                            {...register("image")}
                        />
                    </div>
                    <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-3 rounded-md flex items-center justify-center gap-2 text-white font-medium cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 mt-6">
                        {isLoading ? "Adding..." : "Add Item"} <FaSpoon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;