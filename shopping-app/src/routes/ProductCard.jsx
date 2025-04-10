import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let url = "https://my-json-server.typicode.com/ws0671/react-study/products";
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };
  const showDetail = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  ">
      {products.map((product) => {
        return (
          <div
            aria-label="card"
            key={product.id}
            className="cursor-pointer  transition mb-10"
            onClick={() => showDetail(product)}
          >
            <div className="w-full overflow-hidden">
              <img
                className="hover:scale-107 transition"
                src={product.img}
                alt=""
              />
            </div>
            <div className="flex flex-col space-y-1 my-2 p-4 sm:p-0">
              <div className="">{product.title}</div>
              {/* <div>{product.new}</div> */}
              <div>{product.price.toLocaleString()}원</div>
              <div className="mb-3">{product.choice ? "MD 추천" : ""}</div>
              <div className="flex space-x-1">
                {product.size.map((i, idx) => {
                  return (
                    <div
                      className="cursor-pointer w-4 h-4 font-bold border-1 text-xs rounded-sm flex justify-center items-center hover:bg-orange-400 hover:text-white  transition-all"
                      key={idx}
                    >
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
