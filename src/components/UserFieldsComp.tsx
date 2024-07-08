import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AddUserComp from "./AddUserComp";
import { useUserData } from "../context/UserDataCont";

export default function UserFieldsComp() {
  const { addNewUser, usersData } = useUserData();
  const [addUser, setAddUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: 0,
  });
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setAddUser({
      ...addUser,
      [key]: event.target.value,
    });
  };
  function isValidEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  function UserAdd() {
    if (
      addUser.firstName.length === 0 ||
      addUser.lastName.length === 0 ||
      addUser.email.length === 0 ||
      addUser.salary === 0
    ) {
      alert("All fields are required to input!");
      return;
    }
    if (!isValidEmail(addUser.email)) {
      alert("Email format is incorrect!");
      return;
    }
    if (addUser) {
      addNewUser({
        id: usersData[usersData.length - 1].id + 1,
        firstName: addUser.firstName,
        lastName: addUser.lastName,
        email: addUser.email,
        salary: addUser.salary,
      });
      setAddUser({
        firstName: "",
        lastName: "",
        email: "",
        salary: 0,
      });
    }
  }
  return (
    <div>
      <Stack spacing={2}>
        <TextField
          label="First Name"
          value={addUser.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <TextField
          label="Last Name"
          value={addUser.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        <TextField
          label="Email"
          value={addUser.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <TextField
          label="Salary"
          value={addUser.salary}
          onChange={(e) => handleInputChange(e, "salary")}
        />
        <AddUserComp onClick={() => UserAdd()} />
      </Stack>
    </div>
  );
}
