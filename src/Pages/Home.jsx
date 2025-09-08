import Category from "../Components/Home/Category/Category";
import Recommends from "../Components/Home/ChefRecommends/Recommends";
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
            <Recommends />
        </>
    );
};

export default Home;