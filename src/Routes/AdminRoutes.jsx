import { Navigate, useLocation } from "react-router";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({ children }) => {
    const { user, isLoading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    return user && isAdmin ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;