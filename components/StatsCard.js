const StatsCard = ({ icon, bg }) => {
    return (
        <div className="rounded-2xl overflow-hidden">
            <div className={`flex justify-end ${bg} relative h-20 z-[-1]`}>
                <img src={icon} alt="icon" className="max-h-20 max-w-[80px]" />
            </div>

            <div className="bg-darkblue rounded-2xl -mt-10 text-white p-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum eligendi est dolorem perspiciatis, velit soluta tenetur
                eum magni voluptatum nostrum quas porro dolor quaerat fugiat
                distinctio aspernatur rem enim minus?
            </div>
        </div>
    );
};

export default StatsCard;
