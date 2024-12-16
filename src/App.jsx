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
    <div>
      <Book />
    </div>
  );
}

export default App;
