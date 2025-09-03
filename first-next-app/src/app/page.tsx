
'use client'
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [result, setResult] = useState<any>(null);

  const sendData = async () => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'Hello from Next.js' }),
    });

    setResult(await res.json());
    console.log(result);
  };

  return (
    <div>
      <h1 className="font-bold">Welcome to my home page</h1>
      <Link href="/about">Go to about page</Link><br />
      <button onClick={sendData}>Send POST</button><br />
      {result && JSON.stringify(result["recieved"]["text"])}      
    </div>
  );
}
