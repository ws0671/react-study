import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const images = [
    "/images/ready4.jpeg",
    "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png",
    "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png",
    "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png",
  ];
  const [gameState, setGameState] = useState({
    player: 0,
    computer: 0,
    result: "",
    playerScore: 0,
    computerScore: 0,
  });

  useEffect(() => {
    if (gameState.playerScore === 3 || gameState.computerScore === 3) {
      // 1. 현재 렌더링이 끝난 후 실행되도록 `requestAnimationFrame` 사용
      requestAnimationFrame(() => {
        setTimeout(() => {
          alert("Game Over!");

          // 2. 게임 상태 초기화
          setGameState({
            player: 0,
            computer: 0,
            result: "",
            playerScore: 0,
            computerScore: 0,
          });
        }, 100); // 살짝 딜레이 줘서 렌더링이 먼저 끝나게 함
      });
    }
  }, [gameState.playerScore, gameState.computerScore]); // 점수 변경될 때만 실행

  const randomNumber = () => {
    if (gameState.player === 0) {
      alert("Please select your choice!");
      return;
    }

    const random = 1 + Math.floor(Math.random() * 3);
    let newResult = "";
    let newPlayerScore = gameState.playerScore;
    let newComputerScore = gameState.computerScore;

    if (random === gameState.player) {
      newResult = "tie";
    } else if (
      (random === 1 && gameState.player === 2) ||
      (random === 2 && gameState.player === 3) ||
      (random === 3 && gameState.player === 1)
    ) {
      newResult = "lose";
      newComputerScore++;
    } else {
      newResult = "win";
      newPlayerScore++;
    }

    setGameState({
      ...gameState,
      computer: random,
      result: newResult,
      playerScore: newPlayerScore,
      computerScore: newComputerScore,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">LET'S RSP</h1>
        <div className="box_container">
          <Box
            image={images[gameState.player]}
            onSelect={(choice) =>
              setGameState({ ...gameState, player: choice })
            }
            isSelectable={true}
            type="you"
            result={gameState.result}
            clicked={gameState.player}
            score={gameState.playerScore}
          />
          <Box
            image={images[gameState.computer]}
            onSelect={(choice) =>
              setGameState({ ...gameState, computer: choice })
            }
            isSelectable={false}
            result={
              gameState.result === ""
                ? ""
                : gameState.result === "tie"
                ? "tie"
                : gameState.result === "win"
                ? "lose"
                : "win"
            }
            type="computer"
            clicked={gameState.computer}
            score={gameState.computerScore}
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
