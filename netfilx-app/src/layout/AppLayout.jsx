import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import Navbar from "../pages/Homepage/components/Navber.jsx";

const AppLayout = () => {
  return (
    <div className="bg-black  ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
