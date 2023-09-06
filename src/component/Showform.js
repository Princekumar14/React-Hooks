import React, { useState } from 'react'
import BasicForm from './BasicForm';

const Showform = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getData = (email, password) => {
        setEmail(email);
        setPassword(password);

    };
    return (
        <>
            <div className='show-form' >
                <div> UPLIFTING
                    <label htmlFor="show-email">Email</label>
                    <input value={email} type="text" name="show-email" id="show-email"
                        autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="show-password">Password</label>
                    <input value={password} type="text" name="show-password" id="show-password"
                        autoComplete='off' onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <BasicForm getData1={getData} />
           
        </>
    )
}

export default Showform