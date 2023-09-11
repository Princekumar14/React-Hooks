import React, { useRef, useState } from 'react'

const Uncontrolled = () => {

    const luckyName = useRef(null)
    const luckyNumber = useRef(null)
    // const {luckyName, luckyNumber} = useRef(null)
    const [showName, setShowName] = useState(false)
    const [showNumber, setShowNumber] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("plz fill the data") : setShowName(true);

        const number = luckyNumber.current.value;
        number === "" ? alert("plz fill the data") : setShowNumber(true);


    }
    return (
        <>
            <div className='form' >
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="luckyName">Enter Your Lucky Name</label>
                        <input ref={luckyName} type="text" name="luckyName" id="luckyName" />
                    </div>
                    <div>
                        <label htmlFor="luckyNumber">Enter Your Lucky Number</label>
                        <input ref={luckyNumber} type="text" name="luckyNumber" id="luckyNumber" />
                    </div>

                    <div>
                        <button type='submit' className='btnInner'>Login</button>
                    </div>
                </form>



            </div>
            <div>

                <p>{showName ? `Your lucky name is ${luckyName.current.value}` : ""}</p>
            </div>
            <div>

                <p>{showNumber ? `Your lucky number is ${luckyNumber.current.value}` : ""}</p>
            </div>
        </>
    )
}

export default Uncontrolled