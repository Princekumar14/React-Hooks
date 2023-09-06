import React, { useEffect, useState } from 'react'

const UseEffectCleanUpFunc = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth =()=>{
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener("resize", actualWidth);
    
      return () => {
        window.removeEventListener("resize", actualWidth);
      }
    }, [widthCount])
    
  return (
    <div>
        <p><h1>window size is:</h1></p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffectCleanUpFunc