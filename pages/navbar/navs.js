import React from 'react';
import FacebookLogo from './logo';
import SearchBar from './search';
import Sections from './sections';
import Options from './options';


export default function Navbar() {
    return (
        <nav>
            <FacebookLogo />
            <SearchBar />
            <Sections />
            <Options />
        </nav>
    );
};
