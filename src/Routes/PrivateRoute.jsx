import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthContext";

const PrivateRoute = () => {
    const location = useLocation();
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center"><span className="loading loading-dots loading-xl"></span></div>;
    }

    return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;;