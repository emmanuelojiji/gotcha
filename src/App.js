import "./App.scss";
import Card from "./Components/Card";
import { questionOne } from "./quiz-info";
import { useState } from "react";

function App() {
  const [clickedImage, setClickedImage] = useState(null);

  return (
    <div className="App">
      <div className="card-container">
        <Card
          children={questionOne.map((image, index) => (
            <div className="image-container">
              <img
                src={image.src}
                style={{
                  opacity:
                    clickedImage === index && image.correct ? "0.5" : "1",
                }}
                onClick={() => setClickedImage(index)}
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
}

export default App;
