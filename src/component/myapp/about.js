import React from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();


    console.log(location.pathname);
    return (
        <div>
            {/* <h1>Hello {location.pathname.replace("/", '')} page</h1> */}
            {
                location.pathname === `/about/prince` ?
                    <>
                        <h1>Hello {location.pathname.replaceAll("/", ' ')} page</h1>
                        <p>Hii, Prince Good to see you again</p>
                    </> :
                    <>
                        <h1>Hello {location.pathname.replaceAll("/", ' ')} page</h1>
                        <p>Login to see your files</p>
                    </>
            }

            <button className="btn btn-primary"
                onClick={() => navigate('/index')}>
                Home Page
            </button>

        </div>
    )
}

export default About