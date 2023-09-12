import React, { useMemo, useState } from 'react'

const UesMemo = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);
    const [i, setI] = useState(0)

    const multiplication = useMemo(function multiply(){
        console.log("hellio", add)
        return add*10;
    },[add])
    
    
const re = useMemo(
    function loop1(){
        let i =0
        while(i < 99999999){
            i++
        } 
        return i;
    }, [minus]
)

  return (
    <div>
  
    <h1>{re}</h1>
    <h1>{add}</h1>
    <button className="btn" onClick={()=>setAdd(add + 1)}>Add😎</button>
    {/* <h1>{minus}</h1> */}
    <button className="btn" onClick={()=>setMinus(minus-1)}>Minus😎</button>

</div>
  )
}

export default UesMemo








// import React, { useMemo, useState, useEffect } from 'react'

// const UesMemo = () => {
//     const [add, setAdd] = useState(0);
//     const [minus, setMinus] = useState(100);
//     function multiply() {
//         console.log("hello", add)
//         return add * 10;
//     }
//     const multiplication= useEffect(() => {
//         multiply();
//         // console.log(users)
//     }, [add])

//     return (
//         <div>
//             <h1>{multiplication}</h1>
//             <h1>{add}</h1>
//             <button className="btn" onClick={() => setAdd(add+1)}>Add😎</button>
//             {/* <h1>{minus}</h1> */}
//             {/* <button className="btn" onClick={()=>setAdd(add - 1)}>Minus😎</button> */}
//             <button className="btn" onClick={() => setMinus(3)}>Minus😎</button>

//         </div>
//     )
// }

// export default UesMemo