const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-10">
            <p className="text-[#D99904] text-sm lg:text-xl italic text-center border-b-4 border-[#E8E8E8] w-60 lg:w-76 mx-auto pb-2 lg:pb-4 mb-4">{subHeading}</p>
            <h1 className="text-2xl lg:text-4xl text-center border-b-4 border-[#E8E8E8] w-50 lg:w-76 mx-auto pb-2 lg:pb-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;