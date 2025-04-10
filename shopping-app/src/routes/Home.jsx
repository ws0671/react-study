import { Outlet } from "react-router";
import Header from "../components/Header";
import LowNavbar from "../components/LowNavbar";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="sm:mx-30">
        <Outlet />
      </div>
      <LowNavbar />
    </div>
  );
}
