import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isSizeClicked, setIsSizeClicked] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/ws0671/react-study/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  };
  const handleSizeClick = (e) => {
    setIsSizeClicked(e.target.innerText);
  };
  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinus = () => {
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className="sm:flex gap-15">
      {" "}
      <div className="">
        <img className="h-150" src={product.img} alt="" />
      </div>
      <div className="space-y-8 sm:space-y-10 p-4">
        <div className="text-lg sm:text-xl">{product?.title}</div>
        <div className="gap-3 flex">
          {product?.size?.map((i) => {
            return (
              <div
                className={`${isSizeClicked === i ? "bg-black text-white" : ""}
                  cursor-pointer border-1 w-9 h-9 sm:w-10 sm:h-10 grid place-content-center transition`}
                onClick={(e) => {
                  handleSizeClick(e);
                }}
              >
                {i}
              </div>
            );
          })}
        </div>
        <div className="text-2xl sm:text-3xl font-bold">
          {product?.price?.toLocaleString()}원
        </div>
        <div
          className="flex bg-[#f4f4f4]  rounded-4xl items-center gap-3 justify-between
          w-30
          "
        >
          <button
            className={`${
              quantity < 2 ? "text-gray-300" : "cursor-pointer"
            }  pl-4 py-2`}
            disabled={quantity < 2}
            onClick={handleMinus}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="text-sm ">{quantity}</div>
          <button
            className={`${
              quantity > 9 ? "text-gray-300" : "cursor-pointer"
            }  pr-4 py-2`}
            disabled={quantity > 9}
            onClick={handlePlus}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-700 text-white text-sm sm:text-base rounded-4xl sm:w-100 sm:h-14 p-4 cursor-pointer mb-20"
        >
          장바구니에 담기
        </button>
      </div>
    </div>
  );
}
