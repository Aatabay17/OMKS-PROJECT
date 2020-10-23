import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <div className="header-block">
      <div className="header-block-title">
        <h1 className="omks">One Million KBTU Stories</h1>
      </div>
      <div className="header-block-btn">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/registration">
          <button className="btn btn-sign-up">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
