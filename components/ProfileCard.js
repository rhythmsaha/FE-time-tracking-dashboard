const ProfileCard = ({ selectedOpt, setSelectedOpt }) => {
    const tabOptions = ["daily", "weekly", "monthly"];

    const selectOptionHandler = (e) => {
        setSelectedOpt(e.target.value);
    };

    return (
        <div className="bg-darkblue rounded-xl">
            <div className="bg-warmblue rounded-xl py-8 flex  justify-center space-x-4 lg:flex-col lg:px-8 lg:space-x-0">
                <div className="flex">
                    <div className="h-20 min-w-[80px]">
                        <img
                            src="./images/image-jeremy.png"
                            alt="jeremy"
                            className="object-contain h-full w-full border-4 rounded-full"
                        />
                    </div>
                </div>
                <div className="my-3 lg:my-8">
                    <div className="text-white text-opacity-60">Report for</div>
                    <h1 className="text-white text-xl font-light lg:text-4xl">
                        Jeremy Robson
                    </h1>
                </div>
            </div>

            <div className="py-5">
                <div
                    className="w-9/12 max-w-[250px] mx-auto flex justify-between space-x-4 capitalize select-none lg:space-x-0 lg:flex-col lg:space-y-4 lg:my-4 text-base lg:text-lg"
                    onChange={selectOptionHandler}
                >
                    {tabOptions.map((val, index) => (
                        <label
                            className={`${
                                selectedOpt === val
                                    ? "text-white"
                                    : "text-desaturatedblue"
                            } cursor-pointer  ${
                                selectedOpt !== val &&
                                "hover:text-paleblue transition-all duration-200"
                            } tracking-wide`}
                            htmlFor={`option-${index + 1}`}
                            key={index}
                        >
                            <input
                                type="radio"
                                id={`option-${index + 1}`}
                                value={val}
                                className="hidden"
                                name="taboptions"
                            />
                            {val}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
