import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ourmenu" element={<OurMenu />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;