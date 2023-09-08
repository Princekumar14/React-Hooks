import React, { createContext } from 'react'
import CompB from './CompB';

const BioData = createContext();
// const BioData = createContext(["value","item"]);
// const BioData = createContext("item");
const greet = "Hi Prince";
const greet2 = "Hi dawinder";

const CompA = () => {
  return (
    // <BioData.Provider value={"Hi Prince"} role={"Web Developer "}>
    <BioData.Provider value={{greet,greet2}}>
        <CompB/>
    </BioData.Provider>
  )
}

export default CompA
export {BioData};