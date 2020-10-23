import React, { ReactElement } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css'

interface Props {
    activeChange: (newActive: string) => void;
}

export default function NavBar({activeChange}: Props): ReactElement {
    
    const history = useHistory();

    const handleActive = (newActive: string) => {
        activeChange(newActive);
        if(newActive === ''){
            let path = '/'; 
            history.push(path);
        }
        if(newActive === 'auth'){
            let path = '/auth'; 
            history.push(path);
        }
    }

    const handleLogOut = () => {
        handleActive('');
    }
    return (
        <div className = 'nav-block'>
            <div className = "nav-block-title">
              <h1 className = "omks">One Million KBTU Stories</h1>
            </div>
            <div className = 'nav-block-links'>
                <Link to="/stories">
                    <li className="link" >Feed</li>
                </Link>
                <Link to="/profile">
                    <li className="link">Profile</li> 
                </Link>
                <Link to="/about">
                    <li className="link">About Us</li> 
                </Link>
                <Link to="/contacts">
                    <li className="link">Contacts</li> 
                </Link>
                <Link to="/faq">
                    <li className="link">FAQ</li> 
                </Link>
            </div>
            <div className = "nav-block-btn">
                <Link to="/">
                    <button className="btn" onClick = {handleLogOut} >Log out</button>
                </Link>
            </div>
        </div>    
    )
}
