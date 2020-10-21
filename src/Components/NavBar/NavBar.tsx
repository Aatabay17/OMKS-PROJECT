import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

interface Props {
    
}

export default function NavBar({}: Props): ReactElement {
    
    return (
        // <div className = 'nav-block'>
        //     <div className = "nav-block-title">
        //       <h1 className = "omks">One Million KBTU Stories</h1>
        //     </div>
        //     <div className = "nav-block-link">
        //     <Link to="/feed">
        //       <a className="link" >Feed</a>
        //     </Link>
        //     <Link to="/profile">
        //       <a className="link">Profile</a> 
        //     </Link>
        //     <Link to="/about">
        //       <a className="link">About Us</a> 
        //     </Link>
        //     <Link to="/contacts">
        //       <a className="link">Contacts</a> 
        //     </Link>
        //     <Link to="/faq">
        //       <a className="link">FAQ</a> 
        //     </Link>
        //     </div>
        // </div>    

        <ul>
            <Link to="/feed">
                <li><a href="#home">Feed</a></li>
            </Link>
            <Link to="/feed">
                <li><a href="#home">Profile</a></li>
            </Link>
            <Link to="/feed">
                <li><a href="#home">About Us</a></li>
            </Link>
            <Link to="/feed">
                <li><a href="#home">Contacts</a></li>
            </Link>
            <Link to="/feed">
                <li><a href="#home">FAQ</a></li>
            </Link>
            
        </ul>
    )
}
