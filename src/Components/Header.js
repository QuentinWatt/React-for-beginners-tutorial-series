import React from 'react'
import Navigation from './Navigation'

function Header(){
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto p-3 flex items-center justify-between">
                <span className="font-bold text-2xl">
                    MyAppName
                </span>
                <Navigation />
            </div>
        </header>
    )
}

export default Header