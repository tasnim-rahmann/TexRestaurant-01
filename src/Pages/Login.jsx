import img1 from "../Assets/others/authentication.png";
import img2 from "../Assets/others/authentication1.png";

const Login = () => {
    return (
        <div
            className="h-auto lg:h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="lg:px-40 gap-4 rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between h-full lg:h-4/5 w-full lg:w-4/5">
                <div className="flex-1"><img src={img2} /></div>
                <div className="flex-1">
                    <div className="w-full lg:w-3/4 mx-auto lg:ml-auto">
                        <h1 className="text-center text-2xl lg:text-4xl font-bold">LogIn</h1>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-black font-medium">Email</label>
                                <input type="email" className="input w-full h-14 focus:outline-0" placeholder="Email" />
                                <label className="label text-black font-medium mt-2">Password</label>
                                <input type="password" className="input w-full h-14 focus:outline-0" placeholder="Password" />
                                <div><a className="link link-hover font-medium">Forgot password?</a></div>
                                <input type="password" className="input w-full h-14 focus:outline-0 mt-2" placeholder="Password" />
                                <div><a className="link link-hover text-blue-700 font-medium">Reload Captcha</a></div>
                                <input type="password" className="input w-full h-14 focus:outline-0 mt-2" placeholder="Password" />
                                <button className="btn btn-neutral mt-4 bg-[#D1A054B2] text-white font-medium border-0">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;