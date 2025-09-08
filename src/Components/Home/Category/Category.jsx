import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../Assets/home/slide1.jpg";
import img2 from "../../../Assets/home/slide2.jpg";
import img3 from "../../../Assets/home/slide3.jpg";
import img4 from "../../../Assets/home/slide4.jpg";
import img5 from "../../../Assets/home/slide5.jpg";
import SectionTitle from '../../Shared/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11:00am to 10:00pm---"} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} className='w-full' />
                    <h3 className='text-xl lg:text-2xl uppercase text-center relative bottom-10 lg:bottom-30 text-white font-medium'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className='w-full' />
                    <h3 className='text-xl lg:text-2xl uppercase text-center relative bottom-10 lg:bottom-30 text-white font-medium'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className='w-full' />
                    <h3 className='text-xl lg:text-2xl uppercase text-center relative bottom-10 lg:bottom-30 text-white font-medium'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className='w-full' />
                    <h3 className='text-xl lg:text-2xl uppercase text-center relative bottom-10 lg:bottom-30 text-white font-medium'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} className='w-full' />
                    <h3 className='text-xl lg:text-2xl uppercase text-center relative bottom-10 lg:bottom-30 text-white font-medium'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;