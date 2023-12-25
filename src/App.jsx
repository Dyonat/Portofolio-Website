import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <div className="flex sticky top-0 w-full bg-slate-400 h-screen m-0 justify-center items-center">
          <p>Test 1</p>
        </div>
        <div className="flex sticky top-0 w-full bg-slate-600 h-screen m-0 justify-center items-center">
          <p>Test 2</p>
        </div>
        <div className="flex sticky top-0 w-full bg-slate-700 h-screen m-0 justify-center items-center">
          <p>Test 3</p>
        </div>
        <div className="flex sticky top-0 w-full bg-slate-800 h-screen m-0 justify-center items-center">
          <p>Test 4</p>
        </div>
      </div>
    </>
  );
}

export default App;
