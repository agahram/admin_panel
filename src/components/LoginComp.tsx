import React, { useState } from "react";
import LoginButton from "./LoginButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "../css/LoginStyles.css";
import { User, useUser } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";

export default function LoginComp() {
  const { addUser } = useUser();
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState({
    username: "",
    password: "",
  });

  function isValidEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleAddUser() {
    console.log("this is working");
    if (inputUser.username.length === 0 || inputUser.password.length === 0) {
      alert("All fields are required to input!");
      return;
    }
    if (!isValidEmail(inputUser.username)) {
      alert("Email format is incorrect!");
      return;
    }

    if (inputUser) {
      addUser({
        username: inputUser.username,
        password: inputUser.password,
      });
    }
    navigate("/home");
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setInputUser({
      ...inputUser,
      [key]: event.target.value,
    });
  };
  return (
    <div className="form">
      <Stack spacing={2} sx={{ width: 270 }}>
        <TextField
          label="Username"
          value={inputUser.username}
          onChange={(e) => handleInputChange(e, "username")}
        />
        <TextField
          label="Password"
          value={inputUser.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <LoginButton onClick={() => handleAddUser()} />
      </Stack>
    </div>
  );
}
