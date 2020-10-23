import React, { FunctionComponent, useState } from "react";
import { User } from '../../types'

export const UserInfoContext = React.createContext<User | any>({});

export const UserProvider: FunctionComponent = ({ children }) => {
    const [user, setUser] = useState()

    console.log(user)

    return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export const UserInfoConsumer = UserInfoContext.Consumer;



