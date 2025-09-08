import AddToCartButton from "../../AddToCartButton";

const SingleCard = ({ name, recipe, image, idx }) => {
    return (
        <div className="text-center bg-gray-100 space-y-2 flex flex-col justify-between">
            <div>
                <img src={image} className="w-full" />
                <h1 className="text-2xl font-semibold mt-4">{name}</h1>
                <p className="max-w-3/4 mx-auto text-sm text-[#151515]">{recipe}</p>
            </div>
            <AddToCartButton idx={idx} />
        </div>
    );
};

export default SingleCard;