// import React, { useState } from 'react';
import Navigation from './navigation';

const Header = () => {
    const handleNavigationClick = (section) => {
        console.log(`Clicked on ${section}`);
    };
return (
    <header>
        <Navigation handleNavigationClick={handleNavigationClick}/>
    </header>
    )
};

export default Header;