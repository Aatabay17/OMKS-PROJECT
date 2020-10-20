import React, { ReactElement } from 'react'
import { User } from '../../App'
import './Profile.css'
import avatar from '../../Images/avatar.jpg'

interface Props {
    activeUser: User
};

export default function Profile({activeUser}: Props): ReactElement {
    return (
        <div className = 'profile-block'>
            <span className = 'profile-title'>About me</span>
            <div className = 'profile-info'>
                <div className = 'forth-collumn'>
                    <img src = {avatar}></img>
                </div>
                <div className = 'left-collumn'>
                    <span className = 'profile-property'>Name: </span>
                    <span className = 'profile-property'>Surname: </span>
                    <span className = 'profile-property'>Email: </span> 
                    <span className = 'profile-property'>Faculty and Course: </span>
                </div>
                <div className = 'middle-collumn'>
                    <span className = 'profile-property profile-answer'>{activeUser.name}</span> 
                    <span className = 'profile-property profile-answer'>{activeUser.surname} </span> 
                    <span className = 'profile-property profile-answer'>{activeUser.email}</span> 
                    <span className = 'profile-property profile-answer'>{activeUser.faculty} {activeUser.course}</span> 
                </div>
                <div className = 'right-collumn'>
                   <span className = 'profile-property'>Likes: 0</span>
                   <span className = 'profile-property'>Stories: 0</span>
                   <span className = 'profile-property'>Comments: 0</span>
                </div>
            </div>
        </div>
    )
}
