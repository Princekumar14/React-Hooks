import React from 'react';
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const diffToast = () => {
    //go to react-tostify.com
    toast.success("Login Successfull",{
        position:"top-center"
    });
    toast.warning("Login Successfull",{
        position:"bottom-center"
    });
    toast.error("Login Successfull",{
        position:"top-left"
    });
    toast.info("Login Successfull",{
        position:"top-right",
        autoClose: 5000
    });
}

const Login = () => {
    return (
        <>
            <div className='main-div' >
                <h2>Welcome to Login page</h2>
                <button className="btn" onClick={diffToast}>Login</button>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login