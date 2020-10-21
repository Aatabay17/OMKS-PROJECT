import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div className = 'footer-block'>
            <div className = "footer-block-title">
              <h1 className = "omks">OMKS</h1>
            </div>
            <div className = "footer-block-btn">
            <Link to="/profile">
              <button className="btn">CONTACT US</button>
            </Link>
            <Link to="/FAQ">
              <button className="btn">FAQ</button> 
            </Link>
            </div>    
        </div>
    )
}
