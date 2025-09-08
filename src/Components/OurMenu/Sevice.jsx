const Service = ({ img, heading, description }) => {
    return (
        <div
            className="my-12 h-80 lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="h-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 flex flex-col items-center justify-center bg-black/60 text-white p-2 text-center shadow-lg space-y-2">
                    <h1 className="text-2xl lg:text-4xl font-medium">{heading}</h1>
                    <p className="max-w-2xl mx-auto text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;