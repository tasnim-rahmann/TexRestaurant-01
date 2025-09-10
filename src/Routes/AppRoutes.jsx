import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Pages/Cart";
import Review from "../Pages/Review";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ourmenu" element={<OurMenu />} />
                <Route path="/ourshop/:category" element={<OurShop />} />
                <Route path="/ourshop" element={<OurShop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
            </Route>

            {/* Protected dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/dashboard/cart" element={<Cart />} />
                <Route path="/dashboard/review" element={<Review />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;
