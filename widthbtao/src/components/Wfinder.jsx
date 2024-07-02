import React, { useEffect, useState } from 'react'

const Wfinder = () => {
    const [width , setWidth ] = useState(window.screen.width)
    const [height , setHeight ] = useState(window.screen.height)
    let check = ()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
     window.addEventListener("resize" , check)   
    })
  return (
    <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:"center"}}>
      <p style={{fontSize:'70px'}}>Know your screen Width</p>
      <h1 style={{fontSize:'50px'}}>Width :{width}</h1>
      <h1 style={{fontSize:'50px'}}>height :{height}</h1>
    </div>
  )
}

export default Wfinder
