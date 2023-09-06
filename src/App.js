import React, { useState } from 'react';
import './App.css';
import UseStateSimple from './component/UseStateSimple';
import UseStateArray from './component/UseStateArray';
import UseStateObjects from './component/UseStateObjects';
import ShortCircuitEval from './component/ShortCircuitEval';
import BasicForm from './component/BasicForm';
import Showform from './component/Showform';
import UseEffects1 from './component/useeffect/UseEffects1';
import UseEffectCleanUpFunc from './component/useeffect/UseEffectCleanUpFunc';
import UseEffectAPI from './component/useeffect/UseEffectAPI';
function App() {

  return (
    <div className="App">
      {/* <UseStateSimple/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObjects/> */}
      {/* <ShortCircuitEval/> */}

      {/* <Showform/> */}
      {/* <UseEffects1 /> */}
      {/* <UseEffectCleanUpFunc /> */}
      <UseEffectAPI />

    </div>
  );
}

export default App;
