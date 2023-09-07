import React, { useContext } from 'react'
import { BioData } from './CompA'

const CompC = () => {
    const greeting = useContext(BioData);
    // const greeting2 = useContext(BioData.item);
  return (
    <h1>{greeting} Bai kive aa </h1>
  )
}

export default CompC