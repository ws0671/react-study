import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const images = [
    "/images/rock2.jpg",
    "/images/scissor.jpg",
    "/images/paper.jpg",
  ];
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
  const [result, setResult] = useState("");

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 3);
    setComputer(random);

    if (random === player) {
      setResult("tie");
    } else if (
      (random === 0 && player === 1) ||
      (random === 1 && player === 2) ||
      (random === 2 && player === 0)
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">LET'S RSP</h1>
        <div className="box_container">
          <Box
            image={images[player]}
            onSelect={(choice) => setPlayer(choice)}
            isSelectable={true}
            type="you"
            result={result}
            clicked={player}
          />
          <Box
            image={images[computer]}
            onSelect={(choice) => setPlayer(choice)}
            isSelectable={false}
            result={
              result === "tie" ? "tie" : result === "win" ? "lose" : "win"
            }
            type="computer"
            clicked={computer}
          />
        </div>
        <button
          className={`btn `} // 클릭 상태에 따라 클래스 추가
          onClick={randomNumber}
        >
          GO!
        </button>
      </div>
    </div>
  );
}

export default App;
