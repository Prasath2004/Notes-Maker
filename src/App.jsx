import { useState } from 'react'
import NoteInfo from './components/noteInfo.jsx'
import Navbar from './components/navbar.jsx'
import First from './components/first.jsx'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/new' element={<NoteInfo />} />
            <Route path='/first' element={<First />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App
