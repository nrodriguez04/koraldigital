import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Koral from './pages/Koral'
import Contact from './pages/Contact'
import Error from './pages/Error'


//Component Imports
import Nav from './components/Navigation'

//Logo Import
//import Logo from './assets/Logo_2.png'

//Style Import
import './styles/App.css'



function App() {
  return (
    <div>
    <Nav />
    <div className='container'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='/koralinitiative' element={ <Koral /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/*' element={ <Error /> } />

      </Routes>
    </div>
    </div>
  );
}

export default App;
