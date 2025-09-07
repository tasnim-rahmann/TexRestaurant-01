import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle";
import SingleMenu from "../../SingleMenu";

const PopularMenu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenuItems(popularItems);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-12">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {menuItems.map((item, idx) => (
                    <SingleMenu key={idx} name={item.name} recipe={item.recipe} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;