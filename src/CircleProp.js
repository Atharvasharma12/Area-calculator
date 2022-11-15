import React, { useState } from 'react'
import "./CircleProp.css"
function CircleProp() {

  

  const area = (radius) => {
    return radius * radius * Math.PI
  }

  const perimeter = (radius) =>{
    return 2*Math.PI*radius
  }

  const diameter = (radius) =>{
    return 2*radius
  }

  const [radius,setname]=useState();
  



  return (
      <div>
        <input type = "number" onChange={(e)=>{
          setname(e.target.value)
        }} id  = "numbertray"></input>

    
        <h1>radius of circle is  {radius}</h1>
        <h1>perimeter of circle is  {perimeter (radius)}</h1>
        <h1>diameter of circle is  {diameter (radius)}</h1>
        <h1>area of circle is  {area (radius)}</h1>
        <h1>{}</h1>

      </div>

  )
}

export default CircleProp