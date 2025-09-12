import SectionTitle from "../../Shared/SectionTitle";
import SingleMenu from "../../Shared/SingleMenu";
import PrimaryButton from "../../Shared/PrimaryButton";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router";

const PopularMenu = () => {
    const { menu } = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    return (
        <div className="max-w-7xl mx-auto my-12">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {popular.map((item) => (
                    <SingleMenu key={item._id} name={item.name} recipe={item.recipe} price={item.price} image={item.image} />
                ))}
            </div>
            <div className="text-center mt-6">
                <Link to="/ourshop/salad"><PrimaryButton titile={"View Full  Menu"} /></Link>
            </div>
        </div>
    );
};

export default PopularMenu;