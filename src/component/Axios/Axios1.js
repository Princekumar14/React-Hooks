import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios1 = () => {
    const [userData, setUserData]= useState([])



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserData(response.data)
        })
    })



  return (
    <div>Axios1
        {
            userData.map((data)=>{
                return (
                    <div>{data.name}</div>
                    
                    )
            })
        }
    </div>
  )
}

export default Axios1