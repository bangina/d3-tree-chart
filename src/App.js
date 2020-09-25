import React, { useState, useEffect, useRef } from "react";
import TreeChart from "./TreeChart";
import "./App.css";
const initialData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀",
        },
        {
          name: "😁",
        },
        {
          name: "🤣",
        },
      ],
    },
    {
      name: "😔",
    },
  ],
};

function App() {
  const [data, setData] = useState(initialData);
  // const videoRef = useRef();
  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: false })
  //     .then((stream) => {
  //       videoRef.current.srcObject = stream;
  //       videoRef.current.play();
  //     });
  // }, []);
  return (
    <React.Fragment>
      <h1>Animated Tree Chart</h1>
      <TreeChart data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        Update Data
      </button>
      {/* <video
        ref={videoRef}
        style={{ transform: "scale(-1,1)" }}
        width="300"
        height="150"
      ></video> */}
    </React.Fragment>
  );
}

export default App;
