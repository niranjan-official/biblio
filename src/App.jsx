import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [curtainClass, setCurtainClass] = useState("");
  const [sceneClass, setSceneClass] = useState("");
  const [starterClass, setStarterClass] = useState("");
  const [isStarterVisible, setIsStarterVisible] = useState(true);

  useEffect(() => {
    // Focus handling is omitted as it's not React's preferred pattern.
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) { // Enter key
        showTime();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showTime = () => {
    setCurtainClass("open");
    setSceneClass("expand");
    setStarterClass("fade-out");

    setTimeout(() => {
      setIsStarterVisible(false);
    }, 2000);
  };

  return (
    <div>
      {isStarterVisible && (
        <div id="starter" className={starterClass}>press enter</div>
      )}
      <div id="scene" className={sceneClass}>
        <div id="curtain" className={curtainClass}>
          <h1>TADA!</h1>
          <div className="ground"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
