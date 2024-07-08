import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

export interface User {
  username: string | null;
  password: any;
}
interface Props {
  children?: ReactNode;
}

interface InterfaceUserType {
  user: User | null;
  addUser: (user: User) => void;
}

const InitialValue = {
  user: null,
  addUser: () => null,
};

const UserContext = createContext<InterfaceUserType>(InitialValue);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>({
    username: "",
    password: "",
  });
  useEffect(() => {
    const hasUserName = localStorage.getItem("username");
    const hasPassword = localStorage.getItem("password");
    setUser({
      username: hasUserName,
      password: hasPassword,
    });
  }, []);
  const addUser = (user: User) => {
    setUser({
      username: user.username,
      password: user.password,
    });
  };
  console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");
  return context;
}

export { useUser, UserProvider };
