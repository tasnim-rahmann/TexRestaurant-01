import img1 from "../../../Assets/home/featured.jpg";
import PrimaryButton from "../../Shared/PrimaryButton";
import SectionTitle from "../../Shared/SectionTitle";

const Features = () => {
    return (
        <div
            className="h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="h-full w-full bg-black/60 flex flex-col items-center justify-center py-12">
                <div className="text-white">
                    <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"} />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center p-4">
                    <div className="flex-1">
                        <img src={img1} className="h-[250px] lg:h-[380px] w-[400px] lg:w-[648px]" />
                    </div>
                    <div className="text-white flex-1">
                        <h2 className="font-medium">March 20, 2023</h2>
                        <h1 className="text-lg font-medium">WHERE CAN I GET SOME?</h1>
                        <p className="max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <div className="text-white mt-2">
                            <PrimaryButton titile={"Read More"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;