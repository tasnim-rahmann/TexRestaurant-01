import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import img1 from "../Assets/others/authentication.png";
import img2 from "../Assets/others/authentication1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
    const [captchaInput, setCaptchaInput] = useState("");
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (validateCaptcha(captchaInput) === true) {
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                });
            form.reset();
            navigate(from, { replace: true });
            Swal.fire("Loged in successfuly!");
        } else {
            alert("Invalid captcha, please try again");
        }
    };

    return (
        <div
            className="h-auto lg:h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="lg:px-40 gap-4 rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between h-full lg:h-4/5 w-full lg:w-4/5">
                <div className="flex-1">
                    <img src={img2} alt="auth" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-black font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Email"
                            />

                            <label className="label text-black font-medium mt-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Password"
                            />

                            <div>
                                <a className="link link-hover font-medium">Forgot password?</a>
                            </div>

                            <label className="mt-2">
                                <LoadCanvasTemplate />
                            </label>

                            <input
                                type="text"
                                name="captcha"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                className="input w-full h-14 focus:outline-0 mt-2"
                                placeholder="Type the word in the image"
                            />

                            <button
                                type="submit"
                                className="btn btn-neutral mt-4 bg-[#D1A054B2] text-white font-medium border-0"
                            >
                                Login
                            </button>
                        </fieldset>
                    </form>
                    <div className="text-center">
                        <Link className="link link-hover text-[#D1A054]" to="/register">New here? Create a New Account</Link>
                        <div>
                            <p className="mt-2 text-sm font-medium">Or sign in with</p>
                            <p className="items-center justify-center mt-2 border-1 inline-block p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-150">
                                <FaGoogle />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;