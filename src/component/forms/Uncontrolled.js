import React, { useRef, useState } from 'react'

const Uncontrolled = () => {

    const luckyName = useRef(null)
    const [show, setShow] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("plz fill tyhe data") : setShow(true);


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
                        <button type='submit' className='btnInner'>Login</button>
                    </div>
                </form>



            </div>
            <div>

                <p>{show ? `Your lucky name is ${luckyName.current.value}` : ""}</p>
            </div>
        </>
    )
}

export default Uncontrolled