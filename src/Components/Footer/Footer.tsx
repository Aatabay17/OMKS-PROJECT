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
            <div className = "footer-block-link">
              <Link to="/about">
                <li className = 'footer-links'>About us</li> 
              </Link>
              <Link to="/contacts">
                <li className = 'footer-links'>Contacts</li> 
              </Link>
              <Link to="/FAQ">
                <li className = 'footer-links'>FAQ</li> 
              </Link>
            </div>    
        </div>
    )
}
