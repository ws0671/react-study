import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./loading";
import Button from "./Button";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [currentState, setCurrentState] = useState("current_location");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const cities = ["seoul", "tokyo", "paris", "london"];

  useEffect(() => {
    cityName ? getCityData(cityName) : getLocation();
  }, [cityName, isFahrenheit]);

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

  return (
    <>
      {loading ? (
        <div className="h-screen flex  p-8 bg-linear-to-b from-cyan-500 to-blue-500 justify-center items-center font-custom font-bold">
          <Loading />
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
              <div className=" text-lg sm:text-sm items-center justify-center grid grid-cols-3">
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

            <Button
              setCityName={setCityName}
              setCurrentState={setCurrentState}
              currentState={currentState}
              cities={cities}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
