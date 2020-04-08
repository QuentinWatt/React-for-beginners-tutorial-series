import React from 'react'
import {
    Link
} from "react-router-dom"
  

function NavigationItems(props){
    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={props.closeMenu}
                        className="block text-blue-600 border-t border-b py-3"
                    > 
                        Home 
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        onClick={props.closeMenu}
                        className="block text-blue-600 border-b py-3"
                    > 
                        About 
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationItems