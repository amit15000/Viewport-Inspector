import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [browserWidth, setWidth] = useState(window.innerWidth);
  const [browserHeight, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  });
  return (
    <div className="size">
      <div>
        <div className="container">
          <h1 className="title">Browser Dimensions Tracker</h1>
        </div>
        <div>
          <div className="width">
            <h2 className="data">Width :{browserWidth}</h2>
          </div>
          <div className="width">
            <h2 className="data">Height:{browserHeight}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
