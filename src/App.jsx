import React, { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
    handle.enter();
  };
  return (
    <div className="flex w-full justify-center">
      <button className={`mt-8 border-2 p-2 z-50 ${hide && "hidden"} `} onClick={handleClick}>
        Enter fullscreen
      </button>
      <FullScreen handle={handle}>
        <Book />
      </FullScreen>
    </div>
  );
}

export default App;
