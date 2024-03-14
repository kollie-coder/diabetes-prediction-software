import { Button } from '@chakra-ui/react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Predict from './pages/Predict/Predict'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
   
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    {/*<Route path='/predict' element={<Predict/>}/>*/}
   </Routes>

   <Footer/>
    
    </>
    
  )
}

export default App