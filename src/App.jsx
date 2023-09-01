import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Featured from './Pages/Featured'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Store from './Pages/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Store' element={<Store/>}/>
          <Route path='Featured' element={<Featured/>}/>
          <Route path='Contact' element={<Contact/>}/>
          
        </Route>
      </Routes><Footer/>
    </BrowserRouter>
  )
}

export default App
