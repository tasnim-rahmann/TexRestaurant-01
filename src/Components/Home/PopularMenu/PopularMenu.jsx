import SectionTitle from "../../Shared/SectionTitle";
import SingleMenu from "../../Shared/SingleMenu";
import PrimaryButton from "../../Shared/PrimaryButton";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const { menuItems } = useMenu();
    const popular = menuItems.filter(item => item.category === 'popular');


    return (
        <div className="max-w-7xl mx-auto my-12">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {popular.map((item) => (
                    <SingleMenu key={item._id} name={item.name} recipe={item.recipe} price={item.price} image={item.image} />
                ))}
            </div>
            <div className="text-center mt-6">
                <PrimaryButton titile={"View Full  Menu"} />
            </div>
        </div>
    );
};

export default PopularMenu;