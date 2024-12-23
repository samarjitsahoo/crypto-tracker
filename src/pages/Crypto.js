import React from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
  return (
    <section className="w-full md:w-[80%] flex flex-col mt-16 mb-24 px-4">
      <Filters />
      <TableComponent />
      <Outlet />
    </section>
  );
};

export default Crypto;
