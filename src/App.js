import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Page Imports
import Home from './pages/Home'
import About from './pages/About'
//import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
//import Koral from './pages/Koral'
import KoralInitiativePage from './pages/KoralInitiativePage'; 
import Contact from './pages/Contact'
import Error from './pages/Error'

//import Construction from './pages/Construction'

//Component Imports
import Nav from './components/Navigation'
import Articles from './components/Articles'

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
        {/*<Route path='/' element={ <Construction /> } />*/}
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path="/koral-initiative" element={ <KoralInitiativePage /> } />
        {/*<Route path='/blog' element={ <Blog articles={Articles} /> } />*/}
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/*' element={ <Error /> } />
      </Routes>
    </div>
    </div>
  );
}

export default App;
