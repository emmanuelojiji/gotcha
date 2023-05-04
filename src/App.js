import "./App.scss";
import Card from "./Components/Card";
import { questionOne, questionTwo } from "./quiz-info";
import { useState } from "react";
import pop from "./Media/Audio/pop.mp3";
import chime from "./Media/Audio/chime.wav";
import fail from "./Media/Audio/fail.wav";
import Header from "./Components/Header";

function App() {
  const [questionOneState, setQuestionOneState] = useState(questionOne);
  const [questionTwoState, setQuestionTwoState] = useState(questionTwo);

  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const handleImageClick = (index, image, setQuestionState) => {
    if (image === false) {
      setLives(lives - 1);
      playFail();
      lives === 1 && setGameOver(true);
    } else if (image === true) {
      setQuestionState((prevState) => {
        const newState = [...prevState];
        newState[index].active = false;
        return newState;
      });
    }

    console.log(questionOneState);
  };

  const playPop = () => {
    const audio = new Audio(pop);
    audio.play();
  };

  const playChime = () => {
    const audio = new Audio(chime);
    audio.play();
  };

  const playFail = () => {
    const audio = new Audio(fail);
    audio.play();
  };

  return (
    <div className="App">
      <Header lives={lives} />
      {!gameOver ? (
        <div className="card-container">
          <Card
            heading="Margot Robbie"
            fallAnimation={`${
              questionTwoState.filter((obj) => obj.active === false).length >
                2 && "fall"
            }`}
            children={questionTwoState.map((image, index) => (
              <div className="image-container" key={image.name}>
                {!image.active && (
                  <div className="star-container">
                    <div className="star star-1">✦</div>
                    <div className="star star-2">✦</div>
                    <div className="star star-3">✦</div>
                    <div className="star star-4">✦</div>
                  </div>
                )}
                <img
                  src={image.src}
                  style={{
                    opacity: !image.active && image.correct ? "0" : "1",
                  }}
                  onClick={() => {
                    handleImageClick(index, image.correct, setQuestionTwoState);
                    if (image.correct) {
                      playChime();
                    }
                  }}
                  onMouseEnter={playPop}
                />
              </div>
            ))}
          />

          <Card
            heading="Grammy Winners"
            fallAnimation={`${
              questionOneState.filter((obj) => obj.active === false).length >
                2 && "fall"
            }`}
            children={questionOneState.map((image, index) => (
              <div className="image-container" key={image.name}>
                {!image.active && (
                  <div className="star-container">
                    <div className="star star-1">✦</div>
                    <div className="star star-2">✦</div>
                    <div className="star star-3">✦</div>
                    <div className="star star-4">✦</div>
                  </div>
                )}
                <img
                  src={image.src}
                  style={{
                    opacity: !image.active && image.correct ? "0" : "1",
                  }}
                  onClick={() => {
                    handleImageClick(index, image.correct, setQuestionOneState);
                    if (image.correct) {
                      playChime();
                    }
                  }}
                  onMouseEnter={playPop}
                />
              </div>
            ))}
          />
        </div>
      ) : (
        <h1 className="game-over">
          GAME
          <br />
          OVER
        </h1>
      )}
    </div>
  );
}

export default App;
