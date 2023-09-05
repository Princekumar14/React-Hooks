import React, {useState} from 'react';
const UseStateSimple = () => {
    const[name, setName] = useState("ppppp");
  const onChange =()=>{

    name == 'ppppp' ? setName('prince') : setName('ppppp')
    // if(name == 'ppppp'){
    //   setName('prince');
    // }else{

    //   setName("ppppp")
    // }
  }
    return (
        <>
            <h1>{name}</h1>

            <button className="btn" onClick={onChange}>Change name</button>
        </>
    );
}

export default UseStateSimple;