import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Stories from "./pages/Stories/Stories";
import StoryLanding from "./pages/StoryLanding/StoryLanding";

export interface User {
  id: number;
  name: string;
  surname: string;
  faculty: string;
  course: string;
  email: string;
  password: string;
}

const arrayOfUsers: User[] = [
  {
    id: 1,
    name: "Alim",
    surname: "Atabay",
    faculty: "FIT",
    course: "3",
    email: "a@",
    password: "1",
  },
  {
    id: 2,
    name: "Rakhat",
    surname: "Aubakirov",
    faculty: "FIT",
    course: "3",
    email: "r@",
    password: "2",
  },
];

interface Comment {
  id: number;
  authorId: number;
  authorName: string;
  authorSurname: string;
  publicationDate: string;
  text: string;
  amountOfLikes: number;
}

export interface Story {
  id: number;
  story: string;
  storyTitle: string;
  storyPreview: string;
  authorId: number;
  authorName: string;
  authorSurname: string;
  amountOfLikes: number;
  comments: Comment[];
}

const arrayOfStories: Story[] = [
  {
    id: 1,
    storyTitle: "Мой первый курс или история о том, как мы сбежали с пары",
    storyPreview: "Я был на первом курсе когда мы с другом...",
    story:
      "Я был на первом курсе когда мы с другом, мы зашли на пару, а потом сбежали с неё.",
    authorName: "Alim",
    authorSurname: "Atabay",
    authorId: 1,
    amountOfLikes: 4,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Ахахаха, как смешно",
        amountOfLikes: 4,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "So funny!",
        amountOfLikes: 2,
      },
    ],
  },
  {
    id: 2,
    storyTitle: "5 типов преподователей, которые есть в КБТУ",
    storyPreview:
      "Спустя 3 года обучения, я определил несколько типов преподователей...",
    story:
      "1. Справедливый. 2. Высокомерный. 3. Пофигист 4. Инглишмен 5. Дедлайнщик ",
    authorId: 2,
    authorName: "Leha",
    authorSurname: "Kudryavcev",
    amountOfLikes: 2,
    comments: [
      {
        id: 1,
        authorId: 2,
        authorName: "Leha",
        authorSurname: "Lom",
        publicationDate: "24.11.2019",
        text: "Like!",
        amountOfLikes: 1,
      },
      {
        id: 2,
        authorId: 3,
        authorName: "John",
        authorSurname: "Doe",
        publicationDate: "21.10.2020",
        text: "Жизааа",
        amountOfLikes: 0,
      },
    ],
  },
];

function App() {
  const [active, setActive] = useState("");
  const [users, setUsers] = useState(arrayOfUsers);
  const [activeUser, setActiveUser] = useState({
    id: 0,
    name: "",
    surname: "",
    faculty: "",
    course: "",
    email: "",
    password: "",
  });
  const handleChange = (user: User) => {
    setUsers([...users, user]);
  };

  const handleActive = (newActive: string) => {
    setActive(newActive);
  };

  const handleActiveUser = (newUser: User) => {
    setActiveUser(newUser);
  };
  const [stories, setStories] = useState(arrayOfStories);

  return (
    <Router>
      <Header />
      <div className="welcome-auth-registration-block">
        <div className="main-block">
          <Switch>
            <Route
              path="/registration"
              exact
              render={(props) => (
                <Registration
                  initialUsers={users}
                  onChange={handleChange}
                  activeChange={handleActive}
                />
              )}
            />
            <Route
              path="/auth"
              render={(props) => (
                <Auth
                  initialUsers={users}
                  activeChange={handleActive}
                  activeUserChange={handleActiveUser}
                />
              )}
            />
            <Route path="/welcome" component={Welcome} />
            {/* <Route
              path="/profile"
              render={(props) => (
                <Profile activeUser={activeUser} stories={stories} />
              )}
            /> */}
            <Route exact path="/stories" component={Stories} />
            <Route path="/stories/:id" component={StoryLanding} />
            <Route path="/faq" component={FAQ} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
