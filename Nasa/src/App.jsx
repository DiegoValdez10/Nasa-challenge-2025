import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/home/home';
import NBL from './view/nbl/nbl';
import History from './view/history/history';
import Cupola from './view/cupola/cupola';
import Benefits from './view/benefits/benefits';
import Navbar from './components/Navbar/navbar';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nbl" element={<NBL />} />
            <Route path="/history" element={<History />} />
            <Route path="/cupola" element={<Cupola />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
