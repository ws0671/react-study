import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./routes/Login";
import Home from "./routes/Home";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductRoute";
import ProductRoute from "./components/ProductRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/", // path 추가
      Component: Home,
      loader: () => {
        return { authenticate, setAuthenticate };
      },
      children: [
        {
          index: true, // path 추가
          Component: ProductCard,
        },
        {
          path: "/product/:id", // path 추가
          Component: ProductRoute,
          loader: () => {
            return { authenticate };
          },
        },
      ],
    },
    {
      path: "/login", // path 추가
      Component: Login,
      loader: () => {
        return { authenticate, setAuthenticate };
      },
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
