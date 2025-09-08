import Cover from "../Shared/Cover";
import img1 from "../../Assets/menu/banner3.jpg";
import SectionTitle from "../Shared/SectionTitle";
import TodaysOffer from "./TodaysOffer";
import img2 from "../../Assets/home/chef-service.jpg";
import Service from "./Sevice";

const OurMenu = () => {
    return (
        <div>
            <Cover image={img1} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} />
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"} />
            <TodaysOffer />
            <Service img={img2} heading={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <TodaysOffer />
            <Service img={img2} heading={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <TodaysOffer />
            <Service img={img2} heading={"SALADS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <TodaysOffer />
            <Service img={img2} heading={"SOUPS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <TodaysOffer />
        </div>
    );
};

export default OurMenu;