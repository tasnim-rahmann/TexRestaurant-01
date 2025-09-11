import { FaSpoon } from "react-icons/fa6";
import SectionTitle from "../Shared/SectionTitle";

const AddItem = () => {
    return (
        <div className="max-w-7xl mx-auto m-2">
            <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"} />
            <div className="bg-base-300 p-4 lg:p-12 rounded-sm shadow">
                <form>
                    <div>
                        <label className="text-sm font-medium">Recipe name*</label>
                        <input type="text" className="w-full bg-white focus:outline-0 h-12 rounded-sm mt-2 p-4" placeholder="Enter The Recipe Name" />
                    </div>
                    <div className="mt-4 flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium">Category*</label>
                            <input type="text" placeholder="Category" className="p-4 w-full bg-white focus:outline-0 h-12 rounded-sm mt-2" />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium">Price*</label>
                            <input type="text" placeholder="Price" className="p-4 w-full bg-white focus:outline-0 h-12 rounded-sm mt-2" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-medium">Recipe Details*</label>
                        <textarea className="p-4 w-full min-h-52 bg-white focus:outline-0 rounded-sm mt-2" placeholder="Recipe Details"></textarea>
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
                        />
                    </div>
                    <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-3 rounded-md flex items-center justify-center gap-2 text-white font-medium cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 mt-6">
                        Add Item <FaSpoon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;