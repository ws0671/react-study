import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [currentState, setCurrentState] = useState("current_location");
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    text ? getCityData(text) : getLocation();
  }, [text, isFahrenheit]);

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWholeData(lat, lon);
    });
  }
  const getCityData = async (name) => {
    try {
      const unit = isFahrenheit ? "imperial" : "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=${unit}&q=${name}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.error("날씨 정보를 가져올 수 없습니다", error);
    } finally {
      setLoading(false);
    }
  };
  const getWholeData = async (lat, lon) => {
    try {
      const unit = isFahrenheit ? "imperial" : "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("날씨 정보를 가져올 수 없습니다", error);
    } finally {
      setLoading(false);
    }
  };
  const convertToF = () => {
    setIsFahrenheit(true);
  };

  const convertToC = () => {
    setIsFahrenheit(false);
  };
  const isCurrentState = (location) => {
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
    console.log(currentState);
  };
  return (
    <>
      {loading ? (
        <div className="h-screen flex  p-8 bg-linear-to-b from-cyan-500 to-blue-500 justify-center items-center font-custom font-bold">
          Now Loading...
        </div>
      ) : data ? (
        <div className="h-screen flex  p-8 bg-linear-to-b from-cyan-500 to-blue-500 justify-center items-center font-custom font-bold ">
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:grid-rows-2 w-[50rem]">
            <div
              aria-label="temp_card"
              className="w-full rounded-xl bg-amber-400  text-center p-5 "
            >
              <div className="flex gap-3 justify-center mb-3 ">
                <div></div>
                <div className="text-7xl">{`${data?.main?.temp.toFixed()}`}</div>
                <div className="flex text-2xl justify-center items-center ">
                  <div
                    className={`cursor-pointer ${
                      isFahrenheit
                        ? "text-[#99a1af] hover:text-[#fff] transition-all"
                        : "text-black "
                    }`}
                    onClick={convertToC}
                  >
                    ℃
                  </div>
                  <div className="border-black border-1 h-5 mx-5 flex items-center justify-center"></div>
                  <div
                    className={`cursor-pointer ${
                      isFahrenheit
                        ? "text-black "
                        : "text-[#99a1af] hover:text-[#fff] transition-all"
                    }`}
                    onClick={convertToF}
                  >
                    ℉
                  </div>
                </div>
              </div>
              <div className=" text-lg sm:text-[16px] items-center justify-center grid grid-cols-3">
                <img
                  className="w-8 justify-self-end"
                  src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
                  alt=""
                />
                {isFahrenheit ? (
                  <div>
                    {(data?.main?.temp_max).toFixed()} /{" "}
                    {(data?.main?.temp_min).toFixed()}℉
                  </div>
                ) : (
                  <div>
                    {(data?.main?.temp_max).toFixed()} /{" "}
                    {(data?.main?.temp_min).toFixed()}℃
                  </div>
                )}
              </div>
            </div>
            <div
              aria-label="state_card"
              className="w-full  p-3 flex flex-col justify-center items-center text-3xl text-center gap-3  bg-amber-700 rounded-xl"
            >
              {/* <div>{data?.weather[0]?.main}</div> */}
              <div>{data?.weather[0]?.description}</div>
            </div>
            <div
              aria-label="wind_humidity_card"
              className="w-full bg-white rounded-xl  flex gap-6 p-3 justify-center items-center"
            >
              <div className="flex items-center  justify-center gap-3">
                <div className="w-5 ">
                  <img src="/images/wind.png" alt="" />
                </div>
                {isFahrenheit ? (
                  <div>{data.wind.speed}mph</div>
                ) : (
                  <div>{data.wind.speed}m/s</div>
                )}
              </div>
              <div className="flex items-center  justify-center gap-3">
                <div className="w-5">
                  <img src="/images/weather.png" alt="" />
                </div>
                <div>{data.main.humidity}%</div>
              </div>
            </div>
            <div className=" sm:col-span-3">
              <div aria-label="location_card" className="w-full rounded-xl  ">
                <div
                  className={`${
                    currentState === "current_location"
                      ? "bg-gray-500"
                      : "bg-black"
                  }  text-white w-full border-b-1  p-3 flex justify-center items-center cursor-pointer hover:bg-white hover:text-black rounded-t-xl transition-all`}
                  onClick={() => {
                    setText("");
                    isCurrentState("");
                  }}
                >
                  Current location
                </div>
                <div className="w-full text-white grid grid-cols-4 ">
                  <button
                    className={`${
                      currentState === "seoul" ? "bg-gray-500" : "bg-black"
                    } border-r-1  p-3 cursor-pointer hover:bg-white hover:text-black rounded-bl-xl transition-all`}
                    onClick={() => {
                      setText("seoul");
                      isCurrentState("seoul");
                    }}
                  >
                    Seoul
                  </button>
                  <button
                    className={`${
                      currentState === "tokyo" ? "bg-gray-500" : "bg-black"
                    }  p-3 cursor-pointer hover:bg-white hover:text-black transition-all `}
                    onClick={() => {
                      setText("tokyo");
                      isCurrentState("tokyo");
                    }}
                  >
                    Tokyo
                  </button>
                  <button
                    className={`${
                      currentState === "paris" ? "bg-gray-500" : "bg-black"
                    } border-x-1  p-3 cursor-pointer hover:bg-white hover:text-black transition-all`}
                    onClick={() => {
                      setText("paris");
                      isCurrentState("paris");
                    }}
                  >
                    Paris
                  </button>
                  <button
                    className={`${
                      currentState === "london" ? "bg-gray-500" : "bg-black"
                    }  p-3 cursor-pointer hover:bg-white hover:text-black rounded-br-xl transition-all`}
                    onClick={() => {
                      setText("london");
                      isCurrentState("london");
                    }}
                  >
                    London
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
