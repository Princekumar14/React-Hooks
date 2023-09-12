import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const data = { fname: "", lastName: "" };
    const [inputData, setInputData] = useState(data);
    

    const handleData = ((e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    })
    const handleSubmit = ((e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
            .then((response) => {
                console.log(response.data)
            })
    })
    const handleUpdate = ((e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/2", inputData)
            .then((response) => {
                console.log(response.data)
                
            })
    })
    const handleDelete = ((e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/2", inputData)
            .then((response) => {
                console.log(response)
                
            })
    })


    return (
        <>
            <div className='form' >
                <form >
                    <div>
                        <label htmlFor="fname">First Name</label>
                        <input value={inputData.fname} type="text" name="fname" id="fname"
                            autoComplete='off'
                            onChange={handleData} />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input value={inputData.lastName} type="text" name="lastName" id="lastName"
                            autoComplete='off'
                            onChange={handleData} />
                    </div>
                    <div>
                        <button onClick={handleSubmit} type='submit' className='btnInner'>Login</button>
                        <button onClick={handleUpdate} type='submit' className='btnInner'>Update</button>
                        <button onClick={handleDelete} type='submit' className='btnInner'>Delete</button>
                    </div>
                </form>


            </div>
        </>
    )
}

export default AxiosPost