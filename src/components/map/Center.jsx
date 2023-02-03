const Center = ({ handleClick, setCenterId, CenterList, status }) => {
  const clickHandler = (e) => {
    setCenterId(e);
    handleClick();
  };
  if (status === "isLoading") return <>Loading ...</>;
  if (status === "isError") return <>Unable to fetch centers.</>;
  if (status === "isSuccess" && !CenterList.length)
    return <>No centers available around you.</>;
  return (
    <div className="w-full">
      {CenterList.map((center, i) => {
        return (
          <div
            className={`mb-6 flex flex-col border-x-0 border-b-0 ${
              i !== 0 ? "border-t-rose-400" : "border-t-0"
            }`}
            key={center.id}
          >
            <div className=" py-4 md:pb-2">
              <span>{center.center_name}</span>
            </div>
            <div className="text-sm pb-2">
              <span>
                43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101,
                Abuja, Nigeria,
              </span>
            </div>
            <div className="text-sm pb-2">
              <span>Friday, April 1, 2022</span>
            </div>
            <div className="text-sm pb-2">
              <span>08:30am - 04:00pm</span>
            </div>
            <div className="text-sm pb-2">
              <span>5 Appointment Remaining</span>
            </div>
            <div className="pt-2 text-sm lg:text-base">
              <button
                className="rounded bg-red-500 text-white px-8 py-2"
                onClick={() => clickHandler(center.id)}
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Center;
