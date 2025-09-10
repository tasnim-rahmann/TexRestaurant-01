import { FaHome } from "react-icons/fa";
import gif from "../../Assets/404.gif";
import { Link } from "react-router";

const Page_404 = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto flex items-center justify-center flex-col space-y-4">
            <img src={gif} alt="404 error" className="max-w-xl" />
            <Link to="/">
                <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] px-6 py-3 rounded-md flex items-center justify-center gap-2 text-white font-medium cursor-pointer hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                    <FaHome /> Back To Home
                </button>
            </Link>
        </div>
    );
};

export default Page_404;