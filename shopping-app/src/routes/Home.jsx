import { Outlet } from "react-router";
import Header from "../components/Header";
import LowNavbar from "../components/LowNavbar";
import ProductCard from "./ProductCard";
import OverlayMenu from "../components/OverlayMenu";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative  overflow-hidden">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <OverlayMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="sm:mx-30">
        <Outlet />
      </div>
      <LowNavbar />
    </div>
  );
}
