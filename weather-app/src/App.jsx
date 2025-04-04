import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(false);

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
      const url = `https://api.openweathermap.org/data/2.5/weather?&appid=f743257dc4cdc95b3db03fdea2558e93&units=${unit}&q=${name}`;
      // const url = `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=ja&appid=f743257dc4cdc95b3db03fdea2558e93`;
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
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f743257dc4cdc95b3db03fdea2558e93&units=${unit}`;
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
                    className="cursor-pointer"
                    style={{ color: isFahrenheit ? "#99a1af" : "black" }}
                    onClick={convertToC}
                  >
                    ℃
                  </div>
                  <div className="border-black border-1 h-5 mx-5 flex items-center justify-center"></div>
                  <div
                    className="cursor-pointer"
                    style={{ color: isFahrenheit ? "black" : "#99a1af" }}
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
            <div className=" sm:col-span-3">
              <div
                aria-label="location_card"
                className="w-full rounded-xl bg-black"
              >
                <div
                  className=" text-white w-full border-b-1  p-3 flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setText("");
                  }}
                >
                  Current location
                </div>
                <div className="w-full text-white grid grid-cols-4 ">
                  <button
                    className="border-r-1  p-3 cursor-pointer"
                    onClick={() => {
                      setText("seoul");
                    }}
                  >
                    Seoul
                  </button>
                  <button
                    className="p-3 cursor-pointer"
                    onClick={() => {
                      setText("tokyo");
                    }}
                  >
                    Tokyo
                  </button>
                  <button
                    className="border-x-1  p-3 cursor-pointer"
                    onClick={() => {
                      setText("paris");
                    }}
                  >
                    Paris
                  </button>
                  <button
                    className="p-3 cursor-pointer"
                    onClick={() => {
                      setText("london");
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
