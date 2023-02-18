import './App.css'
import './index.css'

import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bg from './components/Bg'
import Header from './components/Header'
import Home from './routes/Home';


function App() {

  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  


  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Bg theme={theme}></Bg>
        <Header onThemeChange={handleThemeChange} theme={theme}></Header>

        <Routes>
          <Route path='/deep-eye/' element={<Home theme={theme}></Home>}></Route>
          <Route path='/deep-eye/sobre/'></Route>
          <Route path='/deep-eye/secciones/'></Route>
          <Route path='/deep-eye/tienda/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
