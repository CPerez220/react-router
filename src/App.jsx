import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from "./componets/Red.jsx"
import Blue from "./componets/Blue.jsx"
import Home from "./componets/Home.jsx"

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
        <Link to="/"></Link>
      </div>
      <div id="main-section"><Routes>
        <Route path="/blue" element={Blue} />
        <Route path="/red" element={Red} />
        <Route path="/" element={Home} />
     </Routes></div>
    </div>
    </>
  )
}

export default App
