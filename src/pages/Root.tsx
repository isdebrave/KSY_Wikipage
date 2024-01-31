import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import RegisterModal from "../components/RegisterModal";
import UpdateModal from "../components/UpdateModal";

const Root = () => {
  return (
    <>
      <RegisterModal />
      <UpdateModal />
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  );
};

export default Root;
