import "./App.scss";
import Card from "./Components/Card";
import { questionOne } from "./quiz-info";
import { useState } from "react";

function App() {
  const [questionOneState, setQuestionOneState] = useState(questionOne);

  const handleImageClick = (index) => {
    setQuestionOneState((prevState) => {
      const newState = [...prevState];
      newState[index].active = false;
      return newState;
    });

    console.log(questionOneState);
  };

  return (
    <div className="App">
      <div className="card-container">
        <Card
          heading="Next Question"
          children={questionOneState.map((image, index) => (
            <div className="image-container" key={image.name}>
              <img
                src={image.src}
                style={{
                  opacity: !image.active && image.correct ? "0.5" : "1",
                }}
                onClick={() => {
                  handleImageClick(index);
                }}
              />
            </div>
          ))}
        />

        <Card
          heading="Grammy Winners"
          fallAnimation={`${
            questionOneState.filter((obj) => obj.active === false).length > 2 &&
            "fall"
          }`}
          children={questionOneState.map((image, index) => (
            <div className="image-container" key={image.name}>
              <img
                src={image.src}
                style={{
                  opacity: !image.active && image.correct ? "0.5" : "1",
                }}
                onClick={() => {
                  handleImageClick(index);
                }}
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
}

export default App;
