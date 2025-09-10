import { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../Components/Dashboard/SideBar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen">
            <div
                className={`
                    fixed z-20 inset-y-0 left-0 w-64 bg-gray-800 text-white transform 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 transition-transform duration-300 ease-in-out
                `}
            >
                <SideBar toggleSidebar={toggleSidebar} />
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <div className="flex-1 flex flex-col lg:ml-64">
                <div className="lg:hidden p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-2xl text-gray-800"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>

                <main className="p-6 flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
