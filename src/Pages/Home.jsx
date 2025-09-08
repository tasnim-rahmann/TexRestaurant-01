import Category from "../Components/Home/Category/Category";
import Recommends from "../Components/Home/ChefRecommends/Recommends";
import Features from "../Components/Home/Features/Features";
import Hero from "../Components/Home/Hero/Hero";
import PopularMenu from "../Components/Home/PopularMenu/PopularMenu";
import Service from "../Components/Home/Service";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <Service />
            <PopularMenu />
            <Recommends />
            <Features />
            <Testimonials />
        </>
    );
};

export default Home;