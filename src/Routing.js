import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MathHome from './Components/MathHome'
import Prime from './Components/Prime'
import PowerOfTwo from './Components/PowerOfTwo'
import Factorial from './Components/Factorial'
import Fibonacci from './Components/Fibonacci'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<MathHome />} />
            < Route path='/' element={<Prime />} />
            <Route path='/' element={<PowerOfTwo />} />
            <Route path='/' element={<Factorial />} />
            <Route path='/' element={<Fibonacci />} />
        </Routes>
    )
}

export default Routing