import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";

const NavBar = () => {
    const [isPorfileOpen, setIsProfileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [cart] = useCart();

    const forDouble = () => {
        setIsOpen(false);
        setIsProfileOpen(false);
        logOut()
            .then(() => {
                navigate("/login");
                Swal.fire("Logged Out!");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 shadow text-white backdrop-brightness-80">
            <div className="flex justify-between items-center p-3 lg:p-4">
                <div>
                    <p className="text-xl lg:text-3xl font-black">Tex Restaurant</p>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-7 font-medium">
                        <Link to="/"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100">HOME</li></Link>
                        <Link to="/contact"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100">CONTACT US</li></Link>
                        <Link to="/dashboard"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100">DASHBOARD</li></Link>
                        <Link to="/ourmenu"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100">OUR MENU</li></Link>
                        <Link to="/ourshop/salad/"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100">OUR SHOP</li></Link>
                        <Link to="/dashboard/cart">
                            <li className="hover:text-gray-400 cursor-pointer transition-all duration-100">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                                    </div>
                                </div>
                            </li>
                        </Link>
                        <li className="btn btn-ghost btn-circle" onClick={() => setIsProfileOpen(!isPorfileOpen)}><CgProfile size={20} /></li>
                    </ul>
                    <div className={`absolute right-6 top-15 bg-gray-100 rounded-sm text-black ${isPorfileOpen ? "block" : "hidden"}`}>
                        <ul>
                            {
                                user ? (
                                    <>
                                        <li className="px-4 py-1 hover:bg-gray-200 cursor-pointer">Profile</li>
                                        <li className="px-4 py-1 hover:bg-gray-200 cursor-pointer" onClick={forDouble}>Sign Out</li>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login"><li className="px-4 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => setIsProfileOpen(false)}>SIGN IN</li></Link>
                                        <Link to="/register"><li className="px-4 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => setIsProfileOpen(false)}>SIGN UP</li></Link>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} lg:hidden absolute right-0 top-12 w-full`}>
                    <ul className="flex flex-col gap-2 bg-gray-800 text-sm p-2">
                        <Link to="/"><li className=" cursor-pointer transition-all duration-100" onClick={() => setIsOpen(false)}>HOME</li></Link>
                        <Link to="/contact"><li className="cursor-pointer transition-all duration-100" onClick={() => setIsOpen(false)}>CONTACT US</li></Link>
                        <Link to="/dashboard"><li className="cursor-pointer transition-all duration-100" onClick={() => setIsOpen(false)}>DASHBOARD</li></Link>
                        <Link to="/ourmenu"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100" onClick={() => setIsOpen(false)}>OUR MENU</li></Link>
                        <Link to="/ourshop"><li className="hover:text-gray-400 cursor-pointer transition-all duration-100" onClick={() => setIsOpen(false)}>OUR SHOP</li></Link>

                        {user ? (
                            <li className="cursor-pointer transition-all duration-100" onClick={forDouble}>SIGN OUT</li>
                        ) : (
                            <>
                                <Link to="/login"><li className="hover:bg-gray-200 cursor-pointer" onClick={() => setIsOpen(false)}>SIGN IN</li></Link>
                                <Link to="/register"><li className="hover:bg-gray-200 cursor-pointer" onClick={() => setIsOpen(false)}>SIGN UP</li></Link>
                            </>
                        )}
                    </ul>
                </div>
                <div
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiOutlineMenuAlt3 size={25} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;