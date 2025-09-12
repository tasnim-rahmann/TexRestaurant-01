import Cover from "../Shared/Cover";
import img1 from "../../Assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import SingleCard from "../Shared/SingleCard";
import { useParams } from "react-router";

const ShopMain = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIdx = categories.indexOf(category);
    const [tabIdx, setTabIdx] = useState(initialIdx);
    const { menu } = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover image={img1} heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"} />
            <Tabs
                defaultIndex={tabIdx}
                onSelect={(index) => setTabIdx(index)}
                className="max-w-7xl mx-auto my-12"
            >
                <TabList className="flex justify-start md:justify-center border-gray-300 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold
                        hover:text-[#BB8506]"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        SALAD
                    </Tab>

                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold
                        hover:text-[#BB8506]"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        PIZZA
                    </Tab>

                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold
                        hover:text-[#BB8506]"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        SOUP
                    </Tab>
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold 
                        hover:text-[#BB8506]"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        DESERT
                    </Tab>
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold 
                        hover:text-[#BB8506]"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        DRINKS
                    </Tab>
                </TabList>


                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-2">
                        {salad.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg h-full rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} item={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
                        {pizza.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} item={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
                        {soup.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} item={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
                        {dessert.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} item={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
                        {drinks.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} item={item} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopMain;