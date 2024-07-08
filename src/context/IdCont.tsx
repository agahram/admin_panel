import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import { Props } from "./UserDataCont";

interface EditUser {
  id: number | null;
  lastName: string | null;
  firstName: string | null;
  email: string | null;
  salary: number | null;
}

interface InterfaceId {
  idArr: number[] | null;
  setIdArr: (itm: number[]) => void;
}

const InitialValue = {
  idArr: null,
  setIdArr: () => null,
};

const IdContext = createContext<InterfaceId>(InitialValue);

const IdProvider = ({ children }: Props) => {
  const [idArr, setIdArr] = useState<number[]>([]);
  const [editUser, setEditUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    salary: 0,
  });

  return (
    <IdContext.Provider value={{ idArr, setIdArr }}>
      {children}
    </IdContext.Provider>
  );
};

function useId() {
  const context = useContext(IdContext);
  if (context === undefined)
    throw new Error("IdContext was used outside of the IdProvider");
  return context;
}

export { IdProvider, useId };
