import React from 'react';
import { useState } from 'react'

import GetData from './data/getFromMorele'

import './App.css'

import DataRam from './data/Data.json';


interface Memory {
  title: string;
  capacity: string;
  clocking: string
  latency: string;
  img: string;
  price: string;
}

function App() {
  //** MemoryList **/
  const [memoryList, setMemoryList] = useState<Memory[]>(DataRam);
  //** Result - comparing two ram card, default Empty**/
  const [result, setResult] = useState<Memory | null>(null);

  

  return (
    // <div className='ram-list'>
    //   {memoryList && memoryList.map((result, key) => {
    //     return (
    //       <div className='ram-box' key={key}><img className="ram-box-image" src={result.img}/>{result.title}<br/>Clock: {result.clocking}<br/>Latency: {result.latency}</div>
    //     )
    //   })}
    // </div>
<>
<GetData />
</>
  )
}

export default App
