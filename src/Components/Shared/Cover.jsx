import { Parallax } from 'react-parallax';

const Cover = ({ image, heading, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="The Menu"
            strength={-200}
        >
            <div
                className="h-[400px] lg:h-[750px] bg-cover bg-center flex flex-col items-center justify-center text-white"
            >
                <div className="w-3/4 h-2/3 bg-black/70 flex flex-col items-center justify-center gap-2 p-4">
                    <h1 className="text-2xl lg:text-7xl font-bold uppercase">{heading}</h1>
                    <p className="text-lg lg:text-2xl mt-2 uppercase">{subHeading}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
