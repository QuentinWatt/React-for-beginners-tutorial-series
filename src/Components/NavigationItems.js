import React from 'react'
import {
    Link
} from "react-router-dom"
  

function NavigationItems(props){
    return (
        <ul>
            <li>
                <Link 
                    to="/" 
                    onClick={props.closeMenu}
                    className="block text-blue-600 border-b border-t py-3"
                > 
                    Home 
                </Link>
            </li>
            <li>
                <Link 
                    to="/about" 
                    onClick={props.closeMenu}
                    className="block text-blue-600 border-b border-t py-3"
                > 
                    About 
                </Link>
            </li>
        </ul>
    )
}

export default NavigationItems