import { Link, useNavigate } from "react-router";
import img1 from "../Assets/others/authentication.png";
import img2 from "../Assets/others/authentication2.png";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password === data.confirm_password) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    Swal.fire("Profile Created!");
                    navigate("/");
                    console.log(loggedUser);
                });
        }
    };

    return (
        <div
            className="h-auto lg:h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="lg:px-40 gap-4 rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between h-full lg:h-4/5 w-full lg:w-4/5">
                <div className="flex-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-black font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Enter You Name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-warning">This Field is Required</span>}

                            <label className="label text-black font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-warning">This Field is Required</span>}

                            <label className="label text-black font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Photo URL"
                                {...register("photoURL")}
                            />

                            <label className="label text-black font-medium mt-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-warning">This Field is Required</span>}

                            <label className="label text-black font-medium mt-2">Confirm Password</label>
                            <input
                                type="password"
                                name="confirm_password"
                                className="input w-full h-14 focus:outline-0"
                                placeholder="Confirm Your Password"
                                {...register("confirm_password", { required: true })}
                            />
                            {errors.confirm_password && <span className="text-warning">This Field is Required</span>}

                            <button
                                type="submit"
                                className="btn btn-neutral mt-4 bg-[#D1A054B2] text-white font-medium border-0"
                            >
                                Sign Up
                            </button>
                        </fieldset>
                    </form>
                    <div className="text-center">
                        <Link className="link link-hover text-[#D1A054]" to="/login">Already registered? Go to log in</Link>
                        <p className="mt-2 font-medium text-sm">Or sign up with</p>
                        <p className="items-center justify-center mt-2 border-1 inline-block p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-150">
                            <FaGoogle />
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={img2} alt="auth" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;