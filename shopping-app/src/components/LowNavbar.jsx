import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LowNavbar() {
  return (
    <div className="fixed bottom-2 left-0 text-2xl flex justify-around w-full sm:justify-center sm:gap-30">
      <div className="bg-white rounded-full shadow-xl w-15 h-15 grid place-content-center">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="bg-white rounded-full w-15 h-15 shadow-xl grid place-content-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="bg-white rounded-full shadow-2xl w-15 h-15 grid place-content-center">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
