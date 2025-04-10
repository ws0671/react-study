import { Navigate, useLoaderData } from "react-router";
import ProductDetail from "./ProductDetail";

export default function ProductRoute() {
  const { authenticate } = useLoaderData();
  return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
}
