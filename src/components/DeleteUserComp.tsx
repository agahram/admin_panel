import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { useUserData } from "../context/UserDataCont";
import { rows } from "../components/TableComp";
import "../index.css";
import { styled } from "@mui/material/styles";
import { useId } from "../context/IdCont";

interface Props {
  idArr: number[];
  children?: ReactNode;
}
const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};
const DelButton = styled("button")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[600]};
    padding: 8px 16px;
    border-radius: 4px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &:active {
      background-color: ${blue[700]};
      box-shadow: none;
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }
  
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
      &:hover {
        background-color: ${blue[500]};
      }
    }
  `
);

export default function DeleteUserComp() {
  const { handleUserDel, usersData } = useUserData();
  const { idArr } = useId();
  function UserDelete() {
    if (usersData && idArr) {
      handleUserDel(idArr);
      console.log(idArr);
    }
  }
  return (
    <div>
      <DelButton onClick={() => UserDelete()} className="deleteBtn">
        Delete
      </DelButton>
    </div>
  );
}
