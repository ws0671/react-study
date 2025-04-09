import { Outlet } from "react-router";
import Header from "../components/Header";
import LowNavbar from "../components/LowNavbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="sm:p-30">
      <Header />
      <Outlet />
      <LowNavbar />
    </div>
  );
}
