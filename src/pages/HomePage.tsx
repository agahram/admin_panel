import React, { useState } from "react";
import PageNav from "../navigation/PageNav";
import TableComp from "../components/TableComp";
import { UserDataProvider } from "../context/UserDataCont";
import PopUpComp from "../components/PopUpComp";
import EditPopUpComp from "../components/EditPopUpComp";
import { IdProvider } from "../context/IdCont";

export default function HomePage() {
  const [idArr, setIdArr] = useState<number[]>([]);
  return (
    <div>
      <UserDataProvider>
        <PageNav />
        <IdProvider>
          {/* <PopUpComp />
          <EditPopUpComp /> */}
          <TableComp />
        </IdProvider>
      </UserDataProvider>
    </div>
  );
}
