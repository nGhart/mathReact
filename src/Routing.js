import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MathHome from './Pages/MathHome'
import Prime from './Pages/Prime'
import PowerOfTwo from './Pages/PowerOfTwo'
import Factorial from './Pages/Factorial'
import Fibonacci from './Pages/Fibonacci'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<MathHome />} />
            < Route path='prime' element={<Prime />} />
            <Route path='power' element={<PowerOfTwo />} />
            <Route path='factorial' element={<Factorial />} />
            <Route path='fibonacci' element={<Fibonacci />} />
        </Routes>
    )
}

export default Routing