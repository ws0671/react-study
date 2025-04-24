import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import Navbar from "../pages/Homepage/components/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
