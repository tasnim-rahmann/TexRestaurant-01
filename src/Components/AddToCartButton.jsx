const AddToCartButton = ({ idx }) => {
    return (
        <div>
            <button
                className={`my-6 px-6 py-3 rounded-sm uppercase text-[#BB8506] cursor-pointer ${idx == 1 ? "bg-[#1F2937]" : "bg-gray-200 border-b-2"}`}
            >
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCartButton;