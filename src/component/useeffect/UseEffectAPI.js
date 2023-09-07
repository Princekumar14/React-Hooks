import React, { useEffect, useState } from 'react'
import Loading from './github/Loading';
import GithubUsers from './github/githubUsers';
import Error from './github/Error';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const getUsers = async () => {
        try {
            // https://jsonplaceholder.typicode.com/photos
            // https://api.github.com/users
            const response = await fetch('https://api.github.com/users');
            setLoading(false);
            console.log(response)
        // const data = await response.json();
        // console.log(data)
        if(response.status==200){

            setUsers(await response.json());
        }
        
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log(+error)
        }
        



    }

    useEffect(() => {
        getUsers();
        // console.log(users)
    }, [])

    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }

    return (
        <>
            <GithubUsers userss={users} />
        </>
    )
}

export default UseEffectAPI