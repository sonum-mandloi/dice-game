import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeDice = () => {
    const navigate = useNavigate()
  return (
    <div className='flex border-2 w-[85.4rem] h-[100vh]'>
      <img src="http://clipart-library.com/images_k/dice-clipart-transparent/dice-clipart-transparent-7.png" alt="" 
          className='w-[42.7rem]'/>
      <div className='w-[42.7rem] h-[100vh] flex justify-center items-center flex-col font-bold '>
        <h1 className='text-8xl'>Dice Game</h1>
        <button onClick={()=>navigate("/PlayDice")} className='border-2 bg-black text-white p-1 rounded-lg ms-[400px] hover:bg-white hover:text-black hover:border-2 border-black'>Play Now</button>
      </div>
    </div>
  )
}

export default HomeDice
