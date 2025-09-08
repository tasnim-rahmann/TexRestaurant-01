const PrimaryButton = ({ titile }) => {
    return (
        <div>
            <button className="px-6 py-3 font-medium border-b-2 rounded-sm cursor-pointer uppercase">{titile}</button>
        </div>
    );
};

export default PrimaryButton;