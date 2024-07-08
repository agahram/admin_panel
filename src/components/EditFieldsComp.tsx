import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AddUserComp from "./AddUserComp";
import { useUserData } from "../context/UserDataCont";
import EditUserComp from "./EditUserComp";
import { useId } from "../context/IdCont";

// const val = {
//   id: usersData[idArr![0] - 1].id,
//   firstName: usersData[idArr![0] - 1].firstName,
//   lastName: usersData[idArr![0] - 1].lastName,
//   email: usersData[idArr![0] - 1].email,
//   salary: usersData[idArr![0] - 1].salary,
// };

export default function EditFieldsComp() {
  const { handleeditUser, usersData } = useUserData();
  const { idArr } = useId();
  const index = usersData.find((user) => user.id === idArr![0]);
  const [editUser, setEditUser] = useState({
    id: idArr?.length !== 0 ? (index ? index.id : 0) : 0,
    firstName: idArr?.length !== 0 ? (index ? index.firstName : "") : "",
    lastName: idArr?.length !== 0 ? (index ? index.lastName : "") : "",
    email: idArr?.length !== 0 ? (index ? index.email : "") : "",
    salary: idArr?.length !== 0 ? (index ? index.salary : 0) : 0,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setEditUser({
      ...editUser,
      [key]: event.target.value,
    });
  };
  function isValidEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  function UserEdit() {
    if (
      usersData.find((user) => user.id === Number(editUser.id)) === undefined
    ) {
      alert("There is no user with this id!");
      return;
    }
    if (
      editUser.firstName.length === 0 ||
      editUser.lastName.length === 0 ||
      editUser.email.length === 0 ||
      editUser.salary === 0
    ) {
      alert("All fields are required to input!");
      return;
    }
    if (!isValidEmail(editUser.email)) {
      alert("Email format is incorrect!");
      return;
    } else if (editUser !== undefined) {
      handleeditUser({
        id: editUser.id,
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        email: editUser.email,
        salary: editUser.salary,
      });
      setEditUser({
        id: 0,
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
          label="Id"
          value={editUser.id}
          onChange={(e) => handleInputChange(e, "id")}
        />
        <TextField
          label="First Name"
          value={editUser.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <TextField
          label="Last Name"
          value={editUser.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        <TextField
          label="Email"
          value={editUser.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <TextField
          label="Salary"
          value={editUser.salary}
          onChange={(e) => handleInputChange(e, "salary")}
        />
        <EditUserComp onClickEdit={() => UserEdit()} />
      </Stack>
    </div>
  );
}
