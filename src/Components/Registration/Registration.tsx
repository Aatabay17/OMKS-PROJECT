import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../../types";
import "./Registration.css";

interface Props {
  initialUsers: User[];
  onChange: (user: User) => void;
  activeChange: (newActive: string) => void;
}

export default function Registration({
  initialUsers,
  onChange,
  activeChange,
}: Props): ReactElement {
  const newUser = {
    name: "",
    surname: "",
    faculty: "",
    course: "",
    email: "",
    password: "",
  };

  const history = useHistory();

  const handleChange = (user: User) => {
    onChange(user);
  };

  const handleActive = (newActive: string) => {
    activeChange(newActive);
    if (newActive === "") {
      let path = "/";
      history.push(path);
    }
    if (newActive === "auth") {
      let path = "/auth";
      history.push(path);
    }
  };

  const validateUser = (user: User) => {
    if (user.name === "") {
      alert("Please write a name");
      return true;
    }
    if (user.surname === "") {
      alert("Please write a surname");
      return true;
    }
    if (user.email === "") {
      alert("Please write an email");
      return true;
    }
    if (user.password === "" || user.password.length < 6) {
      alert("Your password must contain 6 symbols");
      return true;
    }
    if (user.email.indexOf("@") === -1) {
      alert("Your email must have a '@' symbol");
      return true;
    }
    let check = false;
    initialUsers.forEach((oldUser) => {
      if (oldUser.email === user.email) {
        check = true;
        alert(" There is such email, please write another one");
      }
    });
    return check;
  };

  const handleSubmit = () => {
    if (validateUser(newUser) === false) {
      handleActive("auth");
      handleChange(newUser);
    }
  };
  return (
    <div className="registration-block">
      <div className="registration-input-label-block">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            newUser.name = e.target.value;
          }}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => {
            newUser.surname = e.target.value;
          }}
          required
        />
        <input
          type="text"
          placeholder="Faculty"
          onChange={(e) => {
            newUser.faculty = e.target.value;
          }}
          required
        />
        <input
          type="text"
          placeholder="Course"
          onChange={(e) => {
            newUser.course = e.target.value;
          }}
          required
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            newUser.email = e.target.value;
          }}
          required
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            newUser.password = e.target.value;
          }}
          required
        />
      </div>
      <div className="btn-registration-block">
        <button className="btn" onClick={() => handleActive("")}>
          Back
        </button>
        <button className="btn btn-sign-up" onClick={handleSubmit}>
          Create account
        </button>
      </div>
    </div>
  );
}
