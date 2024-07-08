import React, { ReactNode, createContext, useContext, useState } from "react";
import { rows } from "../components/TableComp";
import { isTypedArray } from "util/types";

export interface UserData {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  salary: number;
}
export interface Props {
  children?: ReactNode;
}
export interface InterfaceUserData {
  usersData: UserData[];
  delUserData?: UserData[] | null;
  handleUserDel: (idArr: number[]) => void;
  addNewUser: (usersData: UserData) => void;
  handleeditUser: (usersData: UserData) => void;
}

const InitialValue = {
  usersData: [],
  delUserData: null,
  handleUserDel: () => null,
  addNewUser: () => null,
  handleeditUser: () => null,
};

const UserDataContext = createContext<InterfaceUserData>(InitialValue);

const UserDataProvider = ({ children }: Props) => {
  const [usersData, setUsersData] = useState<UserData[]>([...rows]);
  const handleUserDel = (idArr: number[]) => {
    setUsersData([
      ...usersData.filter((userData) => !idArr.includes(userData.id)),
    ]);
  };
  const addNewUser = (userData: UserData) => {
    setUsersData([
      ...usersData!,
      {
        id: userData.id,
        lastName: userData.lastName,
        firstName: userData.firstName,
        email: userData.email,
        salary: userData.salary,
      },
    ]);
  };
  const handleeditUser = (userData: UserData) => {
    const id = usersData.map((user) => {
      if (user.id === Number(userData.id)) {
        {
          return {
            ...user,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            salary: userData.salary,
          };
        }
      }
      return user;
    });
    setUsersData(id);
  };
  return (
    <UserDataContext.Provider
      value={{
        usersData,
        handleUserDel,
        addNewUser,
        handleeditUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

function useUserData() {
  const context = useContext(UserDataContext);
  if (context === undefined)
    throw new Error("UserDataContext was used outside of the UserDataProvider");
  return context;
}

export { useUserData, UserDataProvider };
