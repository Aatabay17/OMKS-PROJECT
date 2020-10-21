import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { User } from '../../types'
import './Welcome.css';

interface Props {
    activeUser: User
};

export default function Welcome({activeUser}: Props): ReactElement {
    return (
        <div>
            <span className = 'welcome-title'>Welcome to One Million KBTU Stories {activeUser.name} {activeUser.surname}!</span>
            <span className = 'welcome-description'> What do you want to do first?</span>
            <div className = 'welcome-btn'>
                <Link to="/profile">
                <button className="btn wlcm-btn">View my profile</button>
                </Link>
                <Link to="/feed">
                <button className="btn wlcm-btn">Read stories</button> 
                </Link>
            </div>
        </div>
    )
}
