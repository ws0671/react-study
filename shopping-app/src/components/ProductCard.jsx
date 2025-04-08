import { useEffect, useState } from "react";

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = "https://my-json-server.typicode.com/ws0671/react-study";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-6 mt-10 sm:mt-20">
      {products.map((product) => {
        console.log(typeof product.size);
        console.log(product.size);

        return (
          <div aria-label="card" key={product.id}>
            <div className="w-full">
              <img src={product.img} alt="" />
            </div>
            <div className="flex flex-col space-y-1 my-2">
              <div className="">{product.title}</div>
              {/* <div>{product.new}</div> */}
              <div>{product.price.toLocaleString()}원</div>
              <div className="flex space-x-1">
                {" "}
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
