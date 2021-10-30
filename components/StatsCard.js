const StatsCard = ({ bgProp, title, timeframe, prev }) => {
    return (
        <div className="rounded-2xl overflow-hidden">
            <div
                className={`flex justify-end ${bgProp.bg} relative h-20 z-[-1]`}
            >
                <img
                    src={bgProp.icon}
                    alt="icon"
                    className="max-h-20 max-w-[80px]"
                />
            </div>

            <div className="bg-darkblue rounded-2xl -mt-8 text-white py-8 px-6">
                <div className="flex justify-between items-start">
                    <h1 className="text-sm">{title}</h1>
                    <span className="text-paleblue opacity-70">
                        <svg
                            width="21"
                            height="5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF"
                                fillRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>

                <div className="flex justify-between items-center lg:flex-col  mt-6 lg:items-start">
                    <div className="font-light text-3xl tracking-wide lg:text-6xl">{`${timeframe.current}hrs`}</div>
                    <div className="text-sm text-paleblue opacity-75 mt-2">{`${prev} - ${timeframe.previous} hrs`}</div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
