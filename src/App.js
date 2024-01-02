import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeDice from './DiceGame/HomeDice/HomeDice'
import './App.css'
import PlayDice from './DiceGame/PlayDice/PlayDice'

const AppDice = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeDice/>}/>
      <Route path='/PlayDice' element={<PlayDice />}/>     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppDice
