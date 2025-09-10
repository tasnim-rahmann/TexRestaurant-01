import { FaBook, FaFileContract, FaHome, FaList, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";

const SideBar = () => {
    const adminMenuItems = [
        { to: "/dashboard", icon: FaHome, label: "Admin Home" },
        { to: "/dashboard/add", icon: ImSpoonKnife, label: "Add Items" },
        { to: "/dashboard/manage", icon: FaList, label: "Manage Items" },
        { to: "/dashboard/bookings", icon: FaBook, label: "Manage bookings" },
        { to: "/dashboard/users", icon: FaUser, label: "all users" },
    ];

    return (
        <aside className="w-64 bg-[#D1A054] p-4 flex flex-col min-h-screen shadow">
            {/* Logo */}
            <div className="px-2 py-4 lg:py-8 text-black">
                <h1 className="font-black text-2xl">Tex Restaurant</h1>
            </div>

            {/* Menu */}
            <ul className="gap-1 flex-1 text-black flex flex-col">
                {adminMenuItems.map((item, index) => (
                    <li key={index} className="hover:border-b-2 rounded-sm border-white w-fit transition-all duration-100 font-medium uppercase">
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-2 py-2 rounded-md ${isActive ? " text-white" : ""
                                }`
                            }
                        >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                ))}
                <div className="border-b-2 text-white my-2"></div>
                <ul className="gap-3 flex-1 text-black flex flex-col uppercase">
                    <Link to="/"><li className="font-medium px-2 flex items-center gap-2 hover:border-b-2 rounded-sm border-white w-fit transition-all duration-100"><FaHome /> Home</li></Link>
                    <Link to="/contact"><li className="font-medium px-2 flex items-center gap-2 hover:border-b-2 rounded-sm border-white w-fit transition-all duration-100"><FaFileContract /> Contact</li></Link>
                    <Link to="/ourshop"><li className="font-medium px-2 flex items-center gap-2 hover:border-b-2 rounded-sm border-white w-fit transition-all duration-100"><FaShop /> Our Shop</li></Link>
                    <Link to="/ourmenu"><li className="font-medium px-2 flex items-center gap-2 hover:border-b-2 rounded-sm border-white w-fit transition-all duration-100"><FaList /> Menu</li></Link>
                </ul>
            </ul>

            {/* Footer */}
            <div className="pt-6 text-xs text-base-content/70">
                © 2025 Tex Restaurant
            </div>
        </aside>
    );
};

export default SideBar;
