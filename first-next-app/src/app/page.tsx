
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [result, setResult] = useState<any>(null);
  const [text, setText] = useState("");

  const sendData = async () => {
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression : text }),
    });

    const res = await response.json();
    setResult(res.result);
    console.log(result);
  };

  useEffect(()=>{
    document.addEventListener('keydown',(e) => {
      if(e.key==='Backspace' && text.length){
        console.log("Set text to " + text);
      }
    })
  },[])

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <button onClick={sendData}>Send POST</button>
      {result && JSON.stringify(result["result"])}    
      <Calculator text={text} result={result} setText={setText} setResult={setResult}></Calculator>  
    </div>
  );
}


function Calculator({text, result, setText, setResult}){

  function addText(toAdd){
    setText(text+toAdd);
  }
  function removeText(){
    setText(text.slice(0, -1))
  }

  return <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 border rounded-lg md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="p-5 text-white text-center text-3xl bg-purple-900"><span className="text-orange-500">Calcu</span>lator</div>
        <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">{text}</div>
        <div className="p-5 text-white text-right text-3xl bg-purple-800">= <span className="text-orange-500">{result}</span></div>
        
        
   <div className="flex items-stretch bg-purple-900 h-24">
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>%</div>
      </div>
    
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>(</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>)</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>÷</div>
      </div>
  </div>
        
  <div className="flex items-stretch bg-purple-900 h-24">
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>7</div>
      </div>
    
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>8</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>9</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>×</div>
      </div>
  </div>
        
  <div className="flex items-stretch bg-purple-900 h-24">
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>4</div>
      </div>
    
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>5</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>6</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>-</div>
      </div>
  </div>
        
  <div className="flex items-stretch bg-purple-900 h-24">
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>1</div>
      </div>
    
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>2</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>3</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>+</div>
      </div>
  </div>
        
  
  <div className="flex items-stretch bg-purple-900 h-24 mb-4">
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>+</div>
      </div>
    
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>0</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>.</div>
      </div>
     
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none" onClick={(e) => addText(e.target.textContent)}>=</div>
      </div>
  </div>    
    </div>
  </div>
}
