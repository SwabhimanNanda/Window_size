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
    <div className='flex flex-col justify-center items-center h-screen gap-y-24'>
      <p className='text-9xl'>Know your screen Width</p>
      <h1 className='text-6xl'>Width :{width}</h1>
      <h1 className='text-6xl'>height :{height}</h1>
    </div>
  )
}

export default Wfinder
