import { FaBook, FaCalendar, FaFileContract, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { ImSpoonKnife } from "react-icons/im";
import { FaShop } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import useAdmin from "../../Hooks/useAdmin";

const SideBar = () => {
    const [isAdmin] = useAdmin();

    const adminMenuItems = [
        { to: "/dashboard", icon: FaHome, label: "Admin Home" },
        { to: "/dashboard/add", icon: ImSpoonKnife, label: "Add Items" },
        { to: "/dashboard/manage", icon: FaList, label: "Manage Items" },
        { to: "/dashboard/bookings", icon: FaBook, label: "Manage bookings" },
        { to: "/dashboard/users", icon: FaUser, label: "All Users" },
        { to: "/dashboard/cart", icon: FaShoppingCart, label: "My Cart" },
        { to: "/dashboard/review", icon: VscPreview, label: "Review" },
    ];

    const userMenuItems = [
        { to: "/dashboard", icon: FaHome, label: "User Home" },
        { to: "/dashboard/reservation", icon: FaCalendar, label: "reservation" },
        { to: "/dashboard/history", icon: FaMoneyBill, label: "Payment History" },
        { to: "/dashboard/cart", icon: FaShoppingCart, label: "My Cart" },
        { to: "/dashboard/review", icon: VscPreview, label: "Review" },
        { to: "/dashboard/booking", icon: FaBook, label: "My Bookings" },
    ];

    const menuItems = isAdmin ? adminMenuItems : userMenuItems;

    return (
        <aside className="w-64 bg-[#D1A054] p-4 flex flex-col min-h-screen shadow text-black">
            {/* Logo */}
            <div className="px-2 py-4 lg:py-8">
                <h1 className="font-black text-2xl">Tex Restaurant</h1>
            </div>

            {/* Menu */}
            <ul className="flex flex-col gap-1 flex-1">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.to}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-2 py-2 rounded-md font-medium uppercase w-fit transition-colors duration-200
                                ${isActive ? "text-white" : "text-black hover:text-white"}`
                            }
                        >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                ))}

                <div className="border-b-2 text-white my-2"></div>

                <li>
                    <Link to="/" className="flex items-center gap-2 px-2 py-2 rounded-md font-medium uppercase hover:text-white w-fit">
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="flex items-center gap-2 px-2 py-2 rounded-md font-medium uppercase hover:text-white w-fit">
                        <FaFileContract /> Contact
                    </Link>
                </li>
                <li>
                    <Link to="/ourshop/salad" className="flex items-center gap-2 px-2 py-2 rounded-md font-medium uppercase hover:text-white w-fit">
                        <FaShop /> Our Shop
                    </Link>
                </li>
                <li>
                    <Link to="/ourmenu" className="flex items-center gap-2 px-2 py-2 rounded-md font-medium uppercase hover:text-white w-fit">
                        <FaList /> Menu
                    </Link>
                </li>
            </ul>

            {/* Footer */}
            <div className="pt-6 text-xs text-base-content/70">
                © 2025 Tex Restaurant
            </div>
        </aside>
    );
};

export default SideBar;