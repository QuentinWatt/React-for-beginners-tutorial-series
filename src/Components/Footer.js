import React from 'react'

function Footer(){
    let d = new Date();

    return (
        <footer className="border-t p-3 text-center text-xs absolute bottom-0 w-full bg-gray-200">
            &copy; Copyright { d.getFullYear() }
        </footer>
    )
}

export default Footer