import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./routes/Login";
import Home from "./routes/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // path 추가
      Component: Home,
    },
    {
      path: "/login", // path 추가
      Component: Login,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
