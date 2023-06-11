// import React, { useState } from 'react';
import Navigation from './navigation';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Header = () => {
return (
    <header>
        <Navigation />
        <div>    
            <AiFillGithub />   
            <AiFillLinkedin />
            <AiFillTwitterCircle />
        </div>
        <h1>Jacob Willis</h1>
        <h2>Full-Stack Developer</h2>
    </header>
    )
};

export default Header;