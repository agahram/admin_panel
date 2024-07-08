import React from "react";
import Button from "@mui/material/Button";
import { User, useUser } from "../context/UsersContext";

type Props = {
  onClick: () => void;
};

export default function LoginButton({ onClick }: Props) {
  return (
    <div>
      <Button variant="outlined" className="btn" onClick={onClick}>
        Login
      </Button>
    </div>
  );
}
