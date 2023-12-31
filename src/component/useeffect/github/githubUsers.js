import React from 'react'
import Loading from './Loading'
import { FcApproval} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const GithubUsers = ({ userss }) => {

    return (
        <>
            <h2>Two Techies Employees</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        userss.map((currentUser) => {
                            const {avatar_url, id, login, type } = currentUser;
                            // const { url, id, title, thumbnailUrl } = currentUser;
                            return (
                                <div className="col-10 col-lg-6 col-xl-4 mt-5" key={ id }>
                                    <div className="card p-2">
                                        <div className="d-flex align-itens-center">
                                            <div className="image"><img width="155" src={ avatar_url } alt="" className="rounded" /></div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{ login } <FaGithub/> </h4> 
                                                <span className="textLeft">Web Developer</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Rating</span> <span className="number3">8.9</span> </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default GithubUsers