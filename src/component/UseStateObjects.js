import React, { useState } from 'react'

const UseStateObjects = () => {
    const [myObject, setMyObject] = useState({
        name: "prince", age: 22, course: "B.Tech"
    });
    const changeObject = () => {
        setMyObject({ ...myObject, age: 23 })
    }

    return (
        <div>
            <h1 className='h1Style'>Name: {myObject.name} & Age: {myObject.age} & Course: {myObject.course}</h1>

            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObjects