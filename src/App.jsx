import './App.css'
import './index.css'

import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bg from './components/Bg'
import Header from './components/Header'
import Home from './routes/Home';
import Tienda from './routes/Tienda';
import BgNoMove from './components/BgNoMove';
import Psicodelicos from './routes/Psicodelicos';
import psicodelicos from './data-base/PsicodelicosData';
import ViewPsicodelicos from './components/psicodelicos/ViewPsicodelicos';
import Lsd from './components/psicodelicos/Lsd';
import About from './routes/About';


function App() {

  const [tema, setTema] = useState('dark');

  const handleTemaChange = () => {
    if (tema === 'dark') {
      setTema('light');
    } else {
      setTema('dark');
    }
  }

  


  return (
    <div className={`App ${tema}`}>
      <BrowserRouter>
      <BgNoMove tema={tema}></BgNoMove>
        <Bg tema={tema}></Bg>
        <Header onTemaChange={handleTemaChange} tema={tema}></Header>

        <Routes>
          <Route path='/deep-eye/' element={<Home tema={tema}></Home>}></Route>
          <Route path='/deep-eye/sobre/' element={<About></About>}></Route>
          <Route path='/deep-eye/psicodelicos/' element={<Psicodelicos></Psicodelicos>}></Route>
          <Route path='/deep-eye/tienda/' element={<Tienda tema={tema}></Tienda>}></Route>

          {psicodelicos.map(psicodelico => (
            <Route path={`/deep-eye/psicodelicos/${psicodelico.url}`} element={ <ViewPsicodelicos 
            id={psicodelico.id} tema={tema}/>} ></Route>
          ))}

              <Route path='/deep-eye/psicodelicos/lsd' element={<Lsd tema={tema}></Lsd>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
