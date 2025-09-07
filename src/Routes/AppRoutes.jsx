import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;