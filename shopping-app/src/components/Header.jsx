import {
  faBurger,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const NAV_MENU = ["women", "men", "baby", "kids"];
  const handleMobileMenu = () => {
    setMobileMenuOpen(true);
    console.log(mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-[100] w-full flex justify-between items-center p-4 sm:px-30 backdrop-blur bg-white/60 shadow transition-shadow">
      <Link to="/" aria-label="logo">
        <img
          className="w-10 sm:w-15"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/1029px-UNIQLO_logo.svg.png"
          alt=""
        />
      </Link>
      <div aria-label="nav_menu" className="hidden sm:flex space-x-4 font-bold">
        {NAV_MENU.map((i) => {
          return <div key={i}>{i.toUpperCase()}</div>;
        })}
      </div>
      <div className="text-2xl sm:hidden" onClick={handleMobileMenu}>
        <FontAwesomeIcon icon={faBurger} />
      </div>
      <div className="hidden sm:flex sm:space-x-8">
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer hover:text-orange-400 transition-all"
        />
        <FontAwesomeIcon
          icon={faCartShopping}
          className="cursor-pointer hover:text-orange-400 transition-all"
        />
      </div>
    </div>
  );
}
