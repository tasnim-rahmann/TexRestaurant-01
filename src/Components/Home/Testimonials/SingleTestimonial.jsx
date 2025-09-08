import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { RiDoubleQuotesL } from "react-icons/ri";

const SingleTestimonial = ({ review }) => {
    return (
        <div className="flex flex-col justify-center items-center p-6">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            <span><RiDoubleQuotesL size={50} className="my-5" /></span>
            <p className="w-full lg:max-w-4xl text-center text-[#444] text-sm lg:text-lg">{review.details}</p>
            <h1 className="text-[#CD9003] text-2xl lg:text-3xl font-semibold mt-4">{review.name}</h1>
        </div>
    );
};

export default SingleTestimonial;