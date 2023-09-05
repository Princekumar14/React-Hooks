import React, { useState } from 'react'
import Showform from './Showform';

const BasicForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password };
        setAllEntry([...allEntry, newEntry])
        e.target.reset()
    }
    return (
        <>
            <div className='form' >
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={email} type="text" name="email" id="email"
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={password} type="password" name="password" id="password"
                            autoComplete='off'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <button type='submit' className='btnInner'>Login</button>
                    </div>
                </form>
            </div>

            <div >
                {
                    allEntry.map((currrentElement) => {

                        return ( 
                        // <Showform/>

                            <div className='show-form' >
                                <form onSubmit={submitForm}>
                                    <div>
                                        <label htmlFor="show-email">Email</label>
                                        <input value={currrentElement.email} type="text" name="show-email" id="show-email"
                                            autoComplete='off' />
                                    </div>

                                    <div>
                                        <label htmlFor="show-password">Password</label>
                                        <input value={currrentElement.password} type="text" name="show-password" id="show-password"
                                            autoComplete='off' />
                                    </div>

                                    <div>
                                        <button type='submit' className='btnInner'>Login</button>
                                    </div>
                                </form>
                            </div>
                        )

                    })

                }
            </div>
        </>
    )
}

export default BasicForm