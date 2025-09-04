
'use client'
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [text, setText] = useState("");

  const sendData = async () => {
    const res = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression : text }),
    });

    setResult(await res.json());
    console.log(result);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <button onClick={sendData}>Send POST</button>
      {result && JSON.stringify(result["result"])}      
    </div>
  );
}
