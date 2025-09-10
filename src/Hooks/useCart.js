import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/apiClient";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = apiClient();
    const { user } = useAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    });
    return [cart, refetch];
};

export default useCart;