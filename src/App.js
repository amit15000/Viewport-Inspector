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
        <h2 className="title">Browser Dimensions Tracker</h2>
        <div>
          <div className="width">
            <h3 className="data">Width :{browserWidth}</h3>
          </div>
          <div className="width">
            <h3 className="data">Height:{browserHeight}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
