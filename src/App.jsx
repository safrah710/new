import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import All from './all'
import Pl from './Pl'
import Ml from './Ml'
import Fsd from './Fsd'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<All/>}/>
      <Route path='/pl'  element={<Pl/>}/>
      <Route path='/fsd'  element={<Fsd/>}/>
      <Route path='/ml'  element={<Ml/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
