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
      <div className="dimension">
        <div className="title">
          <h2>Browser Dimensions Tracker</h2>
        </div>
        <h3>Width :{browserWidth}</h3>
      </div>
      <div className="dimension">
        <h3>Width:{browserHeight}</h3>
      </div>
    </div>
  );
}

export default App;
