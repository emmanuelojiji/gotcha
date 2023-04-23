import "./App.scss";
import Card from "./Components/Card";
import { questionOne, questionTwo } from "./quiz-info";
import { useState } from "react";

function App() {
  const [questionOneState, setQuestionOneState] = useState(questionOne);
  const [questionTwoState, setQuestionTwoState] = useState(questionTwo);

  const [gameOver, setGameOver] = useState(false);

  const handleImageClick = (index, image) => {
    if (image === false) {
      setGameOver(true);
    }

    setQuestionOneState((prevState) => {
      const newState = [...prevState];
      newState[index].active = false;
      return newState;
    });

    console.log(questionOneState);
  };

  return (
    <div className="App">
      {!gameOver && (
        <div className="card-container">
          <Card
            heading="Question 2"
            fallAnimation={`${
              questionTwoState.filter((obj) => obj.active === false).length >
                2 && "fall"
            }`}
            children={questionTwoState.map((image, index) => (
              <div className="image-container" key={image.name}>
                <img
                  src={image.src}
                  style={{
                    opacity: !image.active && image.correct ? "0" : "1",
                  }}
                  onClick={() => {
                    handleImageClick(index, image.correct);
                  }}
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
                  </div>
                )}
                <img
                  src={image.src}
                  style={{
                    opacity: !image.active && image.correct ? "0" : "1",
                  }}
                  onClick={() => {
                    handleImageClick(index, image.correct);
                  }}
                />
              </div>
            ))}
          />
        </div>
      )}
    </div>
  );
}

export default App;
