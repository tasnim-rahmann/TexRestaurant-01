import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;