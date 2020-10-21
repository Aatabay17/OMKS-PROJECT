import React, { ReactElement } from 'react'
import { User } from '../../types'
import './Profile.css'
import avatar from '../../Images/avatar.jpg'

interface Props {
    activeUser: User
};

export default function Profile({activeUser}: Props): ReactElement {
    return (
        <div className = 'main-profile-block'>
            <div className = 'left-right-profile-blocks'>
                <div className = 'left-profile-block'>
                    <span className = 'profile-title'>About me</span>
                    <div className = 'profile-info'>
                        <div className = 'avatar-collumn'>
                            <img src = {avatar}></img>
                        </div>
                        <div className = 'left-collumn'>
                            <span className = 'profile-property'>Name: </span>
                            <span className = 'profile-property'>Surname: </span>
                            <span className = 'profile-property'>Email: </span> 
                            <span className = 'profile-property'>Faculty: </span>
                            <span className = 'profile-property'>Course: </span>
                        </div>
                        <div className = 'right-collumn'>
                            <span className = 'profile-property profile-answer'>{activeUser.name}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.surname} </span> 
                            <span className = 'profile-property profile-answer'>{activeUser.email}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.faculty}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.course}</span> 
                        </div>
                    </div>
                </div>
                <div className = 'right-profile-block'>
                    <span className = 'profile-title'>Statistics</span>
                    <div className = 'profile-info-rows'>
                        <div className = 'first-row'>
                            <span className = 'profile-property'>Likes: </span>
                            <span className = 'profile-property'> 0 </span>
                        </div>
                        <div className = 'second-row'>
                            <span className = 'profile-property'>Comments: </span>
                            <span className = 'profile-property'> 0 </span>
                        </div>
                        <div className = 'third-row'>
                            <span className = 'profile-property'>Stories: </span> 
                            <span className = 'profile-property'> 0 </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div className = "down-block">
                <span className = 'profile-title'>My stories</span>
                <div className = 'my-stories-block'>

                </div>
            </div>
        </div>
    )
}
