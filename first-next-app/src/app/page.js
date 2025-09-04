"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  const [text, setText] = useState("");

  const sendData = async () => {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expression: text }),
    });

    const res = await response.json();
    setText(res.result);
    console.log(result);
  };


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input type="text" onChange={(e) => setText(e.target.value) } />
      <Calculator
        text={text}
        result={result}
        setText={setText}
        setResult={setResult}
        sendData={sendData}
      ></Calculator>
    </div>
  );
}

function Calculator({ text, result, setText, setResult, sendData }) {
  function addText(toAdd) {
    setText(text.toString() + toAdd.toString());
  }
  function removeText() {
    setText(text.toString().slice(0, -1));
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      {text}
      <div className=" flex flex-row gap-3">
        <button onClick={(e) => addText(1)}>1</button>
        <button onClick={(e) => addText(2)}>2</button>
        <button onClick={(e) => addText(3)}>3</button>
        <button onClick={(e) => addText("+")}>+</button>
        <button onClick={removeText}>⌫</button>
      </div>
      <div className=" flex flex-row gap-3">
        <button onClick={(e) => addText(4)}>4</button>
        <button onClick={(e) => addText(5)}>5</button>
        <button onClick={(e) => addText(6)}>6</button>
        <button onClick={(e) => addText("-")}>-</button>
        <button onClick={(e) => addText("*")}>*</button>

      </div>
      <div className=" flex flex-row gap-3">
        <button onClick={(e) => addText(7)}>7</button>
        <button onClick={(e) => addText(8)}>8</button>
        <button onClick={(e) => addText(9)}>9</button>
        <button onClick={sendData}>=</button>
        <button onClick={(e) => addText("/")}>/</button>

      </div>
    </div>
  );
}
