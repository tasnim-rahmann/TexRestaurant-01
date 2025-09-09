import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ourmenu" element={<OurMenu />} />
                <Route path="/ourshop/:category" element={<OurShop />} />
                <Route path="/ourshop" element={<OurShop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;