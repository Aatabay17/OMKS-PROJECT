import React, { FunctionComponent, useState } from 'react'
import { User } from '../../types'
import { UserInfoConsumer } from '../UserProvider/UserProvider'

import './Login.css'

const Login: FunctionComponent = () => {
    const [userFields, setUserFields] = useState<User>({
        email: "",
        password: "",
    })

    const fields = [
        {
            name: 'email',
            initialValue: userFields.email,
            placeholder: 'E-mail',
            type: 'email',
        },
        {
            name: 'password',
            initialValue: userFields.password,
            placeholder: 'Пароль',
            type: 'password',
        },
    ];

    const changeValue = (value : string, fieldName : string)  => {        
        setUserFields(prevState => ({...prevState, [fieldName]: value}))
    }

    return (
        <div className="login_container">
            <div className="login_title">
                Войти
            </div>
            <div className="login_inputs">
                {fields.map(input => (
                    <input
                        className="input"
                        placeholder={input.placeholder}
                        value={input.initialValue}
                        type={input.type}
                        onChange={e => changeValue(e.target.value, input.name)} />
                ))}
            </div>
            <UserInfoConsumer>
                {({ setUser }) => (
                    <div className="login_submit">
                        <button className="button_green" onClick={() => setUser(userFields)}>Войти</button>
                    </div>
                )} 
            </UserInfoConsumer>
            
        </div>
    )
}

export default Login
