import React from "react";
import PageNav from "../navigation/PageNav";
import LoginComp from "../components/LoginComp";
import "../css/LoginStyles.css";
import { UserProvider } from "../context/UsersContext";

export default function LoginPage() {
  return (
    <UserProvider>
      <PageNav />
      <div className="login">
        <h3>Login Page</h3>
        <LoginComp />
      </div>
    </UserProvider>
  );
}
