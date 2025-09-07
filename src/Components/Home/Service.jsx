import img1 from "../../Assets/home/chef-service.jpg";

const Service = () => {
    return (
        <div
            className="my-12 max-w-7xl mx-auto h-80 lg:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="h-full flex items-center justify-center">
                <div className="w-2/3 bg-white p-4 text-center shadow-lg space-y-2">
                    <h1 className="text-2xl lg:text-4xl font-medium">Tex Restaurant</h1>
                    <p className="max-w-2xl mx-auto text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam molestias nesciunt perferendis facilis numquam quasi quibusdam asperiores sapiente, ipsam perspiciatis quisquam incidunt est? Blanditiis vel delectus assumenda animi recusandae.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;