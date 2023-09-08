import React, { useEffect, useState } from 'react'
import UseTitleCount from './UseTitleCount'

const UseEffects1 = () => {
    const [count, setCount] = useState(0)
    UseTitleCount(count)
  return (
    <div>
        <h1>{count}</h1>
        <button className="btn" onClick={()=>setCount(count + 1)}>click custom hooks😎</button>

    </div>
  )
}

export default UseEffects1