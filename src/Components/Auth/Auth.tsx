import React, { ReactElement } from 'react'
import { Route, useHistory } from 'react-router-dom';
import { User } from '../../types'
import './Auth.css';

interface Props {
    initialUsers: User[],
    activeChange : (newActive: string) => void;
    activeUserChange : (newUser: User) => void;
}

export default function Auth({initialUsers,activeChange, activeUserChange}: Props): ReactElement {
    const newUser = {
        email:'',
        password: ''
    };
    const history = useHistory();

    const handleActive = (newActive: string) => {
        activeChange(newActive);
        if(newActive === ''){
            let path = '/'; 
            history.push(path);
        }
        if(newActive === 'welcome'){
            let path = '/welcome'; 
            history.push(path);
        }

    }

    const handleActiveUser = (newUser: User) => {
        activeUserChange(newUser);
    }

    const handleSubmit = () => {
        var cnt = 0;
        initialUsers.forEach(user => {
            if(user.email === newUser.email && user.password === newUser.password){
                handleActiveUser(user);
                handleActive('welcome');
                cnt+=1;
            }
        })
        if(cnt < 1) {
            alert('There is no such user!')
        }
        
    }

    return (
        <div className = "auth-block">
            <div className = "auth-input-label-block">
                <input type = "text" placeholder = "Email" onChange = {e => {newUser.email = e.target.value}} required/>
                <input type = "text" placeholder = "Password" onChange = {e => {newUser.password = e.target.value}} required/>
            </div>
            <div className = 'btn-auth-block'>
                <button className = 'btn' onClick = {() => handleActive('')}>Cancel</button>
                <button className = 'btn' onClick = {handleSubmit}>Sign in</button>
            </div>
        </div>
    )
}
