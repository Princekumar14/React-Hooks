import React, { useContext } from 'react'
import { BioData } from './CompA'

const CompC = () => {
    const {greet , greet2} = useContext(BioData );
    // const greeting2 = useContext(BioData.item);
  return (
    <h1>{greet} 22 {greet2} </h1>
  )
}

export default CompC