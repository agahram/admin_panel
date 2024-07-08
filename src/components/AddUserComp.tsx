import React from "react";
import Button from "@mui/material/Button";
import { useUserData } from "../context/UserDataCont";
import { rows } from "../components/TableComp";

type Props = {
  onClick: () => void;
};

export default function AddUserComp({ onClick }: Props) {
  return (
    <div>
      <Button variant="text" onClick={onClick}>
        Add
      </Button>
    </div>
  );
}
