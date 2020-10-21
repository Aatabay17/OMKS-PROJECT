import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Registration from './Components/Registration/Registration';
import Welcome from './Components/Welcome/Welcome';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import Feed from './Components/Feed/Feed';

export interface User {
  id: number,
  name: string,
  surname: string,
  faculty: string,
  course: string,
  email: string,
  password: string
};

const arrayOfUsers: User[] = [
 {
  id: 1,
  name: 'Alim',
  surname: 'Atabay',
  faculty: 'FIT',
  course: '3',
  email: 'a@',
  password: '1',
 },
 {
  id: 2,
  name: 'Rakhat',
  surname: 'Aubakirov',
  faculty: 'FIT',
  course: '3',
  email: 'r@',
  password: '2',
 }
];

export interface Story {
  story: string,
  authorname: string,
  authorsurname: string,
  idcheck: number,
  numberoflikes: number,
  numberofcomments: number
};
const arrayOfStories: Story[] = [
  {
    story: 'Я был на первом курсе когда мы с другом....',
    authorname: 'Alim',
    authorsurname: 'Atabay',
    idcheck: 1,
    numberoflikes: 4,
    numberofcomments: 1
  },
  {
    story: 'Все помнят о том как....',
    authorname: 'Rakhat',
    authorsurname: 'Aubakirov',
    idcheck: 2,
    numberoflikes: 0,
    numberofcomments: 0
  },
  {
    story: 'В это воскресенье вас ждет...',
    authorname: 'Alim',
    authorsurname: 'Atabay',
    idcheck: 1,
    numberoflikes: 3,
    numberofcomments: 2
  }
];

function App() {
  const [active, setActive] = useState('');
  const [users, setUsers] = useState(arrayOfUsers);
  const [activeUser, setActiveUser] = useState({
    id: 0,
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
  };
  const [stories, setStories] = useState(arrayOfStories);

  const addStories = (story: Story) =>{
    setStories([...stories, story])
  };
  return (
    <Router>
        <Header/>
        <div className = "welcome-auth-registration-block">
          <div className = 'main-block'>
          <Switch>
            <Route path='/registration' exact render={(props) => (<Registration {...props} initialUsers = {users} onChange = {handleChange} activeChange = {handleActive} />)}/>
            <Route path='/auth' render={(props) => (<Auth {...props} initialUsers = {users} activeChange = {handleActive} activeUserChange = {handleActiveUser} /> )} />
            <Route path='/welcome' render={(props) => (<Welcome {...props} activeUser = {activeUser} /> )} />
            <Route path='/profile' render={(props) => (<Profile {...props} activeUser = {activeUser} initialStories = {stories} /> )} />
            <Route path='/feed' render={(props) => (<Feed {...props} initialStories = {stories} /> )} />
            <Route path='/faq' component = {FAQ} />
          </Switch>
        </div>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;

