import Category from "../Components/Home/Category/Category";
import Hero from "../Components/Home/Hero/Hero";
import PopularMenu from "../Components/Home/PopularMenu/PopularMenu";
import Service from "../Components/Home/Service";

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <Service />
            <PopularMenu />
        </>
    );
};

export default Home;