import SectionTitle from "../../Shared/SectionTitle";
import SingleCard from "../../Shared/SingleCard";

const Recommends = () => {
    const recommends = [
        {
            "_id": "642c155b2c4774f05c36eeb9",
            "name": "Haddock",
            "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
            "category": "popular",
            "price": 14.7
        },
        {
            "_id": "642c155b2c4774f05c36ee7c",
            "name": "Escalope de Veau",
            "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
            "category": "popular",
            "price": 14.5
        },
        {
            "_id": "642c155b2c4774f05c36ee88",
            "name": "Escalope de Veau",
            "recipe": "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
            "category": "dessert",
            "price": 12.5
        },
    ];

    return (
        <div className="max-w-7xl mx-auto my-12">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {recommends.map((item, idx) => (
                    <SingleCard key={item._id} name={item.name} recipe={item.recipe} image={item.image} idx={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Recommends;
