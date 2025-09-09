import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='max-w-7xl mx-auto my-12'>
            <SectionTitle subHeading={"---What Our Clients Say---"} heading={"TESTIMONIALS"} />
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide>
                        <SingleTestimonial key={review._id} review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;