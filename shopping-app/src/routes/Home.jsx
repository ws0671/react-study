import Header from "../components/Header";
import LowNavbar from "../components/LowNavbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="sm:p-6">
      <Header />
      <ProductCard />
      <LowNavbar />
    </div>
  );
}
