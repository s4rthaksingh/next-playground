
'use client'
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [result, setResult] = useState<any>(null);

  const sendData = async (operands : Array<number>, operation : string) => {
    const res = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ operands : operands, operation : operation }),
    });

    setResult(await res.json());
    console.log(result);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold">Welcome to my home page</h1> 
      <Link href="/about">Go to about page</Link>
      <button onClick={() => sendData(eval("[1,2,4]"), "+")}>Send POST</button>
      {result && JSON.stringify(result["result"])}      
    </div>
  );
}
