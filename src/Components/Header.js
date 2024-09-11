import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header className="border-b p-3">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="font-bold">
                    AppName
                </Link>

                <Navigation />
            </div>
        </header>
    )
}

export default Header