import React, { useEffect, useState } from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import SingleMenu from '../Shared/SingleMenu';

const TodaysOffer = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {menuItems.map((item) => (
                    <SingleMenu key={item._id} name={item.name} recipe={item.recipe} price={item.price} image={item.image} />
                ))}
            </div>
            <div className="text-center mt-6">
                <PrimaryButton titile={"ORDER YOUR FAVOURITE FOOD"} />
            </div>
        </div>
    );
};

export default TodaysOffer;