import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intr from './Intro';
import Add from './Add-tocart';

function App() {
  let data = [
    { ind: 0, name: "new", price1: 400, price2: 300 },
    { ind: 1, name: "new1", price1: 500, price2: 400 },
    { ind: 2, name: "new2", price1: 600, price2: 500 },
    { ind: 3, name: "new3", price1: 700, price2: 600 },
    { ind: 4, name: "new4", price1: 800, price2: 700 },
    { ind: 5, name: "new5", price1: 900, price2: 800 }
  ];
  const [arr, setArr] = useState([]);
  let [id, setId] = useState(-1);
  let [amount,setamount]=useState(0);
  let [quan,setquan]=useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intr data={data} id={id} setId={setId} />} />
        <Route path='/cart' element={<Add data={data} id={id} setId={setId} arr={arr} setArr={setArr} amount={amount} setamount={setamount} quan={quan} setquan={setquan} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
