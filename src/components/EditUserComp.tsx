import React from "react";
import Button from "@mui/material/Button";
import { useUserData } from "../context/UserDataCont";
import { rows } from "../components/TableComp";
import "../index.css";
import { styled } from "@mui/material/styles";

interface Props {
  onClickEdit: () => void;
}

export default function EditUserComp({ onClickEdit }: Props) {
  return (
    <div>
      <Button onClick={onClickEdit} className="deleteBtn">
        Edit
      </Button>
    </div>
  );
}
