import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import apiClient from "../../Services/apiClient";
import useCart from "../../Hooks/useCart";


const AddToCartButton = ({ idx, item }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const location = useLocation();
    const axiosSecure = apiClient();
    const [, refetch] = useCart();

    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                price: item.price
            };
            axiosSecure.post("/carts", cartItem)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire("Food Added to Cart!");
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });

        }
    };
    return (
        <div>
            <button
                onClick={() => handleAddToCart(item)}
                className={`my-6 px-6 py-3 rounded-sm uppercase text-[#BB8506] cursor-pointer ${idx == 1 ? "bg-[#1F2937]" : "bg-gray-200 border-b-2"}`}
            >
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCartButton;