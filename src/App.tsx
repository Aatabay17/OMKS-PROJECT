import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Registration from './Components/Registration/Registration';
import Welcome from './Components/Welcome/Welcome';


export interface User {
  name: string,
  surname: string,
  email: string,
  password: string
};

const arrayOfUsers: User[] = [
 {
  name: 'Alim',
  surname: 'Atabay',
  email: 'alim.atabay117@gmail.com',
  password: '12345',
 }
];

function App() {
  const [active, setActive] = useState('');
  const [users, setUsers] = useState(arrayOfUsers);
  const [activeUser, setActiveUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  const handleChange = (user: User) =>{
    setUsers([...users,user])
  };

  const handleActive = (newActive: string) => {
    setActive(newActive);
  };

  const handleActiveUser = (newUser: User) => {
    setActiveUser(newUser);
  }

  return (
    <Router>
      <div className = "welcome-auth-registration-block">
        <Header/>
        <div className = 'main-block'>
          <Switch>
            <Route path='/registration' exact render={(props) => (<Registration {...props} initialUsers = {users} onChange = {handleChange} activeChange = {handleActive} />)}/>
            <Route path='/auth' render={(props) => (<Auth {...props} initialUsers = {users} activeChange = {handleActive} activeUserChange = {handleActiveUser} /> )} />
            <Route path='/Welcome' render={(props) => (<Welcome {...props} activeUser = {activeUser} /> )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

