import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(navigate);
    
    return (
        <div>
            <h1>Hello {location.pathname.replace("/", '')} page</h1>
            <button className="btn-primary btn"
                onClick={()=>navigate(-1)}
            >
                Go Back
            </button>
        </div>
    )
}

export default Index