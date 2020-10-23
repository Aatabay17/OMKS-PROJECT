import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { initialUsers } from './data'
import { User } from "./types";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import NavBar from "./components/NavBar/NavBar";
import Stories from "./pages/Stories/Stories";
import StoryLanding from "./pages/StoryLanding/StoryLanding";
import Profile from "./components/Profile/Profile";

// function App() {
//   const[showedElement, setShowedElement] = useState(<></>)
//   const [users, setUsers] = useState(initialUsers);
//   const [active, setActive] = useState('');
//   const [activeUser, setActiveUser] = useState({
//     name: '',
//     surname: '',
//     faculty: '',
//     course: '',
//     email: '',
//     password: ''
//   });
//   const handleChange = (user: User) => {
//     setUsers([...users, user]);
//   }



function App() {
  const [showedElement, setShowedElement] = useState(<></>);
  const [users, setUsers] = useState(initialUsers);
  const [active, setActive] = useState("");
  const [activeUser, setActiveUser] = useState<User>({
    name: "",
    surname: "",
    faculty: "",
    course: "",
    email: "",
    password: "",
  });
  const handleChange = (user: User) => {
        setUsers([...users, user]);
  }
  const handleActive = (newActive: string) => {
    setActive(newActive);
  };

  const handleActiveUser = (newUser: User) => {
    setActiveUser(newUser);
  };

  return (
    <Router>
      {active === "" ? <Header /> : <NavBar activeChange={handleActive} />}
      <div className="welcome-auth-registration-block">
        <div className="main-block">
          <Switch>
            <Route
              path="/registration"
              exact
              render={(props) => (
                <Registration
                  onChange={handleChange}
                  initialUsers={users}
                  activeChange={handleActive}
                />
              )}
            />
            <Route
              path="/auth"
              render={(props) => (
                <Auth
                  {...props}
                  initialUsers={users}
                  activeChange={handleActive}
                  activeUserChange={handleActiveUser}
                />
              )}
            />
            <Route
              path="/welcome"
              render={(props) => <Welcome {...props} activeUser={activeUser} />}
            />
            <Route path="/faq" component={FAQ} />
            <Route path="/about" component={About} />
            <Route path="/stories" exact component={Stories} />
            <Route path="/stories/:id" component={StoryLanding} />
            <Route
              path="/profile"
              render={(props) => <Profile {...props} activeUser={activeUser} />}
            />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
