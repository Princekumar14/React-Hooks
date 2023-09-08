import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./nav";
import About from "./about";
import Index from "./index";
import Login from './login';


const Home = () => {
    return (
        // <>
        <BrowserRouter>
            <Nav />
            <Routes>

                <Route exact path='/index' element={<Index />} />
                <Route path='/about' element={<About />} >
                    <Route path=':prince' element={<About />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
        // </>
    )
}

export default Home