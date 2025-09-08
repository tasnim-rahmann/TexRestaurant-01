import Cover from "../Shared/Cover";
import img1 from "../../Assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import SingleCard from "../Shared/SingleCard";

const ShopMain = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const { menuItems } = useMenu();
    const dessert = menuItems.filter(item => item.category === 'dessert');
    const soup = menuItems.filter(item => item.category === 'soup');
    const salad = menuItems.filter(item => item.category === 'salad');
    const pizza = menuItems.filter(item => item.category === 'pizza');
    const drinks = menuItems.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover image={img1} heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"} />
            <Tabs
                defaultIndex={tabIdx}
                onSelect={(index) => setTabIdx(index)}
                className="max-w-7xl mx-auto my-12"
            >
                <TabList className="flex justify-center gap-6 border-gray-300">
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold border-b-2 border-transparent 
                        hover:text-[#BB8506] hover:border-[#BB8506] transition"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        SALAD
                    </Tab>

                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold border-b-2 border-transparent 
                        hover:text-[#BB8506] hover:border-[#BB8506] transition"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        PIZZA
                    </Tab>

                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold border-b-2 border-transparent 
                        hover:text-[#BB8506] hover:border-[#BB8506] transition"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        SOUP
                    </Tab>
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold border-b-2 border-transparent 
                        hover:text-[#BB8506] hover:border-[#BB8506] transition"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        DESERT
                    </Tab>
                    <Tab
                        className="px-6 py-2 cursor-pointer text-lg font-semibold border-b-2 border-transparent 
                        hover:text-[#BB8506] hover:border-[#BB8506] transition"
                        selectedClassName="text-[#BB8506] border-b-2 border-[#BB8506]"
                    >
                        DRINKS
                    </Tab>
                </TabList>


                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {salad.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {pizza.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {soup.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {dessert.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {drinks.map((item, idx) => (
                            <div key={item._id} className="bg-card-bg rounded-sm shadow">
                                <SingleCard name={item.name} idx={idx} image={item.image} recipe={item.recipe} />
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopMain;