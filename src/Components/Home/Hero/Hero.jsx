import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../Assets/home/01.jpg";
import img2 from "../../../Assets/home/02.jpg";
import img3 from "../../../Assets/home/03.png";
import img4 from "../../../Assets/home/04.jpg";
import img5 from "../../../Assets/home/05.png";
import img6 from "../../../Assets/home/06.png";


const Hero = () => {
    return (
        <div className="text-center">
            <Carousel
                autoPlay={true}
                interval={2500}
                infiniteLoop={true}
                showStatus={false}
                renderThumbs={() => [img1, img2, img3, img4, img5, img6].map((src, i) => (
                    <img key={i} src={src} className="h-20 object-cover" />
                ))}
            >

                <div>
                    <img src={img1} alt="slide1" className="h-[700px] object-cover w-full" />
                </div>
                <div>
                    <img src={img2} alt="slide2" className="h-[700px] object-cover w-full" />
                </div>
                <div>
                    <img src={img3} alt="slide3" className="h-[700px] object-cover w-full" />
                </div>
                <div>
                    <img src={img4} alt="slide4" className="h-[700px] object-cover w-full" />
                </div>
                <div>
                    <img src={img5} alt="slide5" className="h-[700px] object-cover w-full" />
                </div>
                <div>
                    <img src={img6} alt="slide6" className="h-[700px] object-cover w-full" />
                </div>
            </Carousel>
        </div>

    );
};

export default Hero;