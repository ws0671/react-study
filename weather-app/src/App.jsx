import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const countries = {
    seoul: {
      lat: 37.5503,
      lon: 126.9971,
    },
    tokyo: {
      lat: 35.6764,
      lon: 139.65,
    },
    washingtondc: { lat: 38.895, lon: 77.015 },
    paris: {
      lat: 48.8575,
      lon: 2.3514,
    },
    berlin: {
      lat: 52.4,
      lon: 13.1,
    },
    rome: {
      lat: 41.5335,
      lon: 12.2858,
    },
  };
  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWholeData(lat, lon);
    });
  }
  const getWholeData = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=153.1&appid=f743257dc4cdc95b3db03fdea2558e93&lang=kr`;
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

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div className="h-screen bg-linear-to-b from-cyan-500 to-blue-500 flex  flex-col justify-center items-center font-rowdies">
        {loading ? (
          <div className="text-2xl">로딩중...</div>
        ) : data ? (
          <>
            <div className="flex gap-4">
              <div
                aria-label="card"
                className=" w-40 h-40 rounded-xl bg-amber-400 text-6xl flex flex-col justify-center items-center "
              >
                <div className="">{`${(
                  +data?.main?.temp - 273.15
                ).toFixed()}℃`}</div>

                {/* <div>
                {`${((+data?.main?.temp * 9) / 5 - 459.67).toFixed()}℉`}
              </div> */}
                {/* 최저 : {data?.main?.temp_min}
              최고 : {data?.main?.temp_max}
              풍속 : {data?.wind?.speed}
              날씨 : {data?.weather[0]?.main} */}
              </div>
              <div className="w-40 h-40 bg-amber-700 rounded-xl">
                <div>{data?.weather[0]?.main}</div>
                <div>{data?.weather[0]?.description}</div>
                <div className="flex gap-4">
                  <div>최고 : {data?.main?.temp_max}</div>
                  <div>최저 : {data?.main?.temp_min}</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                alt=""
              />
            </div>
            <div className="bg-black text-white rounded-xl ">
              <button className="border-r-1 p-3">서울</button>
              <button className="p-3">도쿄</button>
              <button className="border-x-1 p-3">워싱턴D.C</button>
              <button className="p-3">파리</button>
              <button className="border-l-1 p-3">로마</button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
