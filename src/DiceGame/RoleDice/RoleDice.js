import React, { useState } from 'react'
import { GiDiceSixFacesOne,GiDiceSixFacesTwo,GiDiceSixFacesThree,GiDiceSixFacesFour,GiDiceSixFacesFive,GiDiceSixFacesSix } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { getReset, getRoleDice, getSelectedNo } from '../ReduxDice/SliceDice/SliceDice';


const RoleDice = ({setText}) => {

  const No = useSelector((state)=>state?.Dice?.SelectedNoList)
    console.log('No',No);
     
    const diceIcon=[1,2,3,4,5,6,7]
    const dispatch = useDispatch() 
    const [role,setRole]=useState(0)
    
    function DiceRole(){
      var RoleDice = Math.floor(Math.random()*diceIcon.length)
      setRole(RoleDice)
      dispatch(getRoleDice(RoleDice))
      console.log('RoleDice',RoleDice);
      dispatch(getSelectedNo(0))
      }

   

    if(role === 1){
      return (
      <>
           <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesOne/></div> 
           <Reset />
      </>)
    }else if(role === 2){
       return(
       <>
           <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesTwo/></div>
           <Reset/>
        </>)
    }else if(role === 3){
       return(
       <> 
           <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesThree/></div> 
           <Reset/>
       </> )
     }else if(role === 4){
       return(
       <> 
          <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesFour/></div>
           <Reset/>
        </> )
     }else if(role === 5){
       return(
       <>
        <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesFive/></div> 
        <Reset/>
       </> )
     }else if(role === 6){
      return  (
      <>
        <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesSix/></div>
        <Reset/>
      </>)
     }else{
        return  (
            <>
              <div onClick={()=>No > 0 ? DiceRole(): setText("Number is Not Selected")} className='text-9xl'><GiDiceSixFacesOne/></div>
              <Reset/>
            </>)
     }
   
}

export default RoleDice

function Reset(){
    const dispatch = useDispatch();
    const[show,setShow]=useState(false)

    function hide(){
      setShow(!show)
    }
    return(
        <>
         <h3 className='font-bold'>Click on Dice to roll</h3>
         <button className='border-2 p-1 bg-white text-black rounded-lg mb-2' onClick={()=>dispatch(getReset(0))}>Reset Score</button>
         <button className='border-2 p-1 bg-black text-white rounded-lg' onClick={hide} >Show Rules</button>


         <div className={show ? 'block border-2 bg-pink-200 w-[730px] p-3 mt-4':'hidden'}>
             <h2 className='text-black font-bold text-xl'>How to play dice game</h2>
             <div className="p-2 ps-5 font-semibold">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you
                    will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
           </div>
        </div>
         </> 
  )
}