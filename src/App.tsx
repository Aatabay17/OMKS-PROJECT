import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Registration from './Components/Registration/Registration';
import Welcome from './Components/Welcome/Welcome';
import Footer from './Components/Footer/Footer';

export interface User {
  name: string,
  surname: string,
  faculty: string,
  course: string,
  email: string,
  password: string
};

const arrayOfUsers: User[] = [
 {
  name: 'Alim',
  surname: 'Atabay',
  faculty: 'FIT',
  course: '3',
  email: 'a@',
  password: '1',
 }
];

function App() {
  const [active, setActive] = useState('');
  const [users, setUsers] = useState(arrayOfUsers);
  const [activeUser, setActiveUser] = useState({
    name: '',
    surname: '',
    faculty: '',
    course: '',
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
        <Header/>
        <div className = "welcome-auth-registration-block">
          <div className = 'main-block'>
          <Switch>
            <Route path='/registration' exact render={(props) => (<Registration {...props} initialUsers = {users} onChange = {handleChange} activeChange = {handleActive} />)}/>
            <Route path='/auth' render={(props) => (<Auth {...props} initialUsers = {users} activeChange = {handleActive} activeUserChange = {handleActiveUser} /> )} />
            <Route path='/welcome' render={(props) => (<Welcome {...props} activeUser = {activeUser} /> )} />
            <Route path='/profile' render={(props) => (<Profile {...props} activeUser = {activeUser} /> )} />
          </Switch>
        </div>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;

