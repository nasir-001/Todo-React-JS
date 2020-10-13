import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-900 text-white text-center p-4">
            <h1 className="text-4xl">TodoList</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

export default Header;