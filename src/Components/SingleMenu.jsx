const SingleMenu = ({ name, recipe, price, image }) => {
    return (
        <div className="flex gap-6 max-w-xl w-full p-4">
            <div>
                <img
                    src={image}
                    className="object-cover object-center"
                    style={{
                        borderRadius: "0 200px 200px 200px",
                        background: "#D9D9D9",
                        width: "120px",
                        height: "100px",
                    }}
                />
            </div>

            <div className="flex flex-col w-full">
                <div className="flex justify-between pt-1 w-full">
                    <h1 className="text-xl">{name} - </h1>
                    <h3>${price}</h3>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default SingleMenu;