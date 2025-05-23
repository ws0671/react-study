import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import counterStore from "./stores/counterStore";

function App() {
  const { count, increase, decrease, increaseBy, decreaseBy } = counterStore();
  return (
    <div className="p-4 flex h-[100dvh] justify-center flex-col items-center font-rowdies">
      <Counter />
      <div className="flex justify-center">
        <svg
          className="w-[300px] h-[300px]"
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 59 59"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M44.246,27.028H31v-11.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3.5c0,2.757,2.243,5,5,5s5-2.243,5-5v-16
              c0-0.553-0.448-1-1-1s-1,0.447-1,1v16c0,1.654-1.346,3-3,3s-3-1.346-3-3v-3.5c0-3.032-2.467-5.5-5.5-5.5s-5.5,2.468-5.5,5.5v11.5
              H14.972C6.716,27.028,0,33.743,0,42c0,7.149,5.209,14.872,12.963,14.972c0.069,0.001,0.14,0.001,0.213,0.001
              c2.072,0,5.679-0.354,9.378-1.367c4.359-1.194,9.764-1.195,14.107-0.001c3.952,1.087,8.169,1.381,9.596,1.367l0,0
              C52.386,56.867,59,51.112,59,42C59,33.743,52.381,27.028,44.246,27.028z M46.225,54.971c-1.278,0.021-5.327-0.276-9.033-1.295
              c-4.669-1.285-10.481-1.284-15.166-0.001c-3.629,0.994-7.12,1.317-9.038,1.296C7.682,54.903,2,49.674,2,42
              c0-7.152,5.819-12.972,12.972-12.972h29.274C51.278,29.028,57,34.847,57,42C57,48.174,52.67,54.861,46.225,54.971z"
              />
              <path
                d="M33.631,32.028c0-0.553-0.448-1-1-1H28c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h4.631
              C33.184,33.028,33.631,32.581,33.631,32.028z"
              />
              <path
                className="cursor-pointer hover:opacity-50"
                fill="orange"
                onClick={() => decreaseBy(10)}
                d="M37,38.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S39.206,38.028,37,38.028z "
              />
              <path
                className="cursor-pointer hover:opacity-50"
                fill="red"
                onClick={() => increaseBy(10)}
                d="M51,38.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S53.206,38.028,51,38.028z "
              />
              <path
                className="cursor-pointer hover:opacity-50"
                onClick={decrease}
                fill="blue"
                d="M44,45.028c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S46.206,45.028,44,45.028z "
              />
              <path
                className="cursor-pointer hover:opacity-50"
                onClick={increase}
                fill="green"
                d="M44,39.028c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S41.794,39.028,44,39.028z "
              />
              <path
                d="M23,38.028h-3v-3c0-0.553-0.448-1-1-1h-6c-0.552,0-1,0.447-1,1v3H9c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h3v3
              c0,0.553,0.448,1,1,1h6c0.552,0,1-0.447,1-1v-3h3c0.552,0,1-0.447,1-1v-6C24,38.474,23.552,38.028,23,38.028z M22,44.028h-3
              c-0.552,0-1,0.447-1,1v3h-4v-3c0-0.553-0.448-1-1-1h-3v-4h3c0.552,0,1-0.447,1-1v-3h4v3c0,0.553,0.448,1,1,1h3V44.028z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
