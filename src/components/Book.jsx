import React, { useState, useEffect } from "react";
import Trigger from "./Trigger";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function Book() {
  const [curtainClass, setCurtainClass] = useState("");
  const [sceneClass, setSceneClass] = useState("");
  const [starterClass, setStarterClass] = useState("");
  const [isStarterVisible, setIsStarterVisible] = useState(true);
  const [run, setRun] = useState(false);

  const [trigger, setTrigger] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (trigger) {
      showTime();
    }
  }, [trigger]);

  const showTime = () => {
    setCurtainClass("open");
    setSceneClass("expand");
    setStarterClass("fade-out");

    setTimeout(() => {
      setIsStarterVisible(false);
    }, 2000);

    setTimeout(() => {
      setRun(true);
    }, 5000);

    setTimeout(() => {
      window.location.href =
        "https://flipbooklets.com/pdfflipbooklets/matzone-2024";
    }, 15000);
  };

  return (
    <div>
      {isStarterVisible && <div id="starter" className={starterClass}></div>}
      <div id="scene" className={`${sceneClass}`}>
        <div id="curtain" className={curtainClass}>
          <div className="content flex h-screen flex-col items-center justify-center text-center text-5xl text-white">
            <h1 className="text-9xl font-extrabold text-cyan-600">
              MATZONE <span className="text-white">2024</span>{" "}
            </h1>
            <p className="tracking-[0.2em]">OFFICIALLY INAGRUATED</p>
          </div>
          {/* <div className="ground"></div> */}
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
      <Trigger setTrigger={setTrigger} />
      <ReactConfetti recycle={false} run={run} width={width} height={height} />
    </div>
  );
}

export default Book;
