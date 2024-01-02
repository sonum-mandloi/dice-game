import React, { useState } from 'react'
import RoleDice from '../RoleDice/RoleDice';
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedNo } from '../ReduxDice/SliceDice/SliceDice';

const PlayDice = () => {
    const num = [1,2,3,4,5,6];
     const dispatch = useDispatch()
     const Score = useSelector((state)=>state?.Dice?.RoleList)
     const No = useSelector((state)=>state?.Dice?.SelectedNoList)
     const[text,setText]=useState("")

  return (
    <div className='p-8 h-auto'>
       <div className='flex justify-between p-5'>
         <div className='w-[130px] h-[80px] text-center text-xl font-bold'>
            <h1 className='mb-3 text-3xl'>{Score}</h1>
            <h3>Total Score</h3>
         </div>
         <div>
          <div className='ms-[8.3rem]'>{No > 0 ? "" : text}</div>
            {
                num.map((no)=>{
                    return(
                        <>
                        <button type='text' 
                          className={no === No ? "bg-black text-white border-2 mx-2 p-1 w-9 hover:bg-black hover:text-white" : "bg-white text-black border-2 mx-2 p-1 w-9 hover:bg-black hover:text-white"}
                           onClick={()=>dispatch(getSelectedNo(no))}>
                            {no}
                            </button>
                        </>
                    )
                })
            }
            <h2 className='mt-2 font-bold ms-[195px]'>Select Number</h2>
         </div>
       </div>
       <div className='h-[69.7vh] flex flex-col justify-center items-center'>
       <RoleDice setText={setText}/>
       </div>
    </div>
  )
}

export default PlayDice
