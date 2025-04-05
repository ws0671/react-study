export default function Button({
  cities,
  setCityName,
  setCurrentState,
  currentState,
}) {
  const getIsCurrentState = (location) => {
    switch (location) {
      case "current_location":
        setCurrentState("current_location");
        break;
      case "seoul":
        setCurrentState("seoul");
        break;
      case "tokyo":
        setCurrentState("tokyo");
        break;
      case "paris":
        setCurrentState("paris");
        break;
      case "london":
        setCurrentState("london");
        break;
      default:
        setCurrentState("current_location");
        break;
    }
  };
  return (
    <div className=" sm:col-span-3">
      <div aria-label="location_card" className="w-full rounded-xl  ">
        <div
          className={`${
            currentState === "current_location" ? "bg-gray-500" : "bg-black"
          }  text-white w-full border-b-1  p-3 flex justify-center items-center cursor-pointer hover:bg-white hover:text-black rounded-t-xl transition-all`}
          onClick={() => {
            setCityName("");
            getIsCurrentState("");
          }}
        >
          Current location
        </div>
        <div className="w-full text-white grid grid-cols-4 rounded-b-xl overflow-hidden ">
          {cities.map((city) => {
            return (
              <button
                className={`${
                  currentState === city ? "bg-gray-500" : "bg-black"
                } p-3 cursor-pointer hover:bg-white hover:text-black  transition-all`}
                onClick={() => {
                  setCityName(city);
                  getIsCurrentState(city);
                }}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
