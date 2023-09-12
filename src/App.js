import React, { useState } from 'react';
import './App.css';
import UseStateSimple from './component/UseStateSimple';
import UseStateArray from './component/UseStateArray';
import UseStateObjects from './component/UseStateObjects';
import ShortCircuitEval from './component/ShortCircuitEval';
import BasicForm from './component/forms/BasicForm';
import Showform from './component/forms/Showform';
import UseEffects1 from './component/useeffect/UseEffects1';
import UseEffectCleanUpFunc from './component/useeffect/UseEffectCleanUpFunc';
import UseEffectAPI from './component/useeffect/UseEffectAPI';
import Uncontrolled from './component/forms/Uncontrolled';
import UseReducer from './component/useReducer/UseReducer';
import CompA from './component/useContext/CompA';
import Home from './component/myapp/home';
import UesMemo from './component/useMemo/UesMemo';
import Axios1 from './component/Axios/Axios1';
import AxiosPost from './component/Axios/AxiosPost';
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
      {/* <UseEffectAPI /> */}
      {/* <Uncontrolled /> */}
      {/* <UseReducer /> */}

       {/* <CompA/>  */}
       {/* <Home/> */}
       {/* <UesMemo/> */}
       {/* <Axios1/> */}
       <AxiosPost/>

    </div>
  );
}

export default App;
