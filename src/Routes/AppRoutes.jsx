import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ourmenu" element={<OurMenu />} />
                <Route path="/ourshop/:category" element={<OurShop />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;