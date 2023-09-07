import React, { createContext } from 'react'
import CompB from './CompB';

const BioData = createContext();
// const BioData = createContext(["value","item"]);
// const BioData = createContext("item");

const CompA = () => {
  return (
    // <BioData.Provider value={"Hi Prince"} role={"Web Developer "}>
    <BioData.Provider value={"Hi Prince"}>
        <CompB/>
    </BioData.Provider>
  )
}

export default CompA
export {BioData};