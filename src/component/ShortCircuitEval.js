import React, { useState } from 'react'
import UseStateArray from './UseStateArray';

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState('');
    const [demo2, setDemo2] = useState(true);
    return (
        <div>
            <h1 className="h1Style">
                {demo ||
                    <>
                    <h1>"OR (||)" is working</h1>
                    <p>This is rigth side because left side return false or blank ('')</p>
                    </>
                }
            </h1>

            <h1 className="h1Style">
                { demo2 && 
                // <UseStateArray/>
                <>
                <h1>"&&" is working</h1>
                <p>This rigthside because left side return true</p>
                </>
                }
            </h1>
        </div>
    )
}

export default ShortCircuitEval