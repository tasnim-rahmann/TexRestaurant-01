import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Page_404 from "../Components/Shared/Page_404";
import Cart from "../Components/Dashboard/Cart";
import Review from "../Components/Dashboard/Review";
import Users from "../Components/Dashboard/Users";
import AddItem from "../Components/Dashboard/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../Components/Dashboard/ManageItem";

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
                <Route path="/*" element={<Page_404 />} />
            </Route>

            {/* Protected dashboard routes */}
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="cart" element={<Cart />} />
                <Route path="review" element={<Review />} />

                {/* Admin only */}
                <Route
                    path="users"
                    element={
                        <AdminRoutes>
                            <Users />
                        </AdminRoutes>
                    }
                />
                <Route
                    path="add"
                    element={
                        <AdminRoutes>
                            <AddItem />
                        </AdminRoutes>
                    }
                />
                <Route
                    path="manage"
                    element={
                        <AdminRoutes>
                            <ManageItem />
                        </AdminRoutes>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;