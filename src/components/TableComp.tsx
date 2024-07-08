import * as React from "react";
import { DataGrid, GridColDef, DataGridProps } from "@mui/x-data-grid";
import DeleteUserComp from "./DeleteUserComp";
import { useDataGridProps } from "@mui/x-data-grid/DataGrid/useDataGridProps";
import { useState, createContext } from "react";
import { Props, useUserData } from "../context/UserDataCont";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import EditUserComp from "./EditUserComp";
import { useId } from "../context/IdCont";
import PopUpComp from "./PopUpComp";
import EditPopUpComp from "./EditPopUpComp";
import Stack from "@mui/material/Stack";
import DelConfirmComp from "./DelConfirmComp";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 180,
  },
  {
    field: "salary",
    headerName: "Salary",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 80,
    type: "number",
  },
];

export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "jonsnow@gmail.com",
    salary: 3500,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "lancerc@simbrella.az",
    salary: 4200,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "jaime@gmail.com",
    salary: 4500,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    email: "aryatstark@gmail.com",
    salary: 1600,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "targayen@gmail.com",
    salary: 5100,
  },
];

export default function DataTable() {
  const { usersData } = useUserData();
  const { setIdArr } = useId();

  return (
    <>
      <Stack spacing={2} direction="row">
        <PopUpComp />
        <EditPopUpComp />
        <DelConfirmComp />
      </Stack>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={usersData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          className="table"
          onRowSelectionModelChange={(itm) => {
            // (itm) => console.log(itm[itm.length - 1].toString())
            setIdArr(itm as number[]);
          }}
        />
      </div>
    </>
  );
}
