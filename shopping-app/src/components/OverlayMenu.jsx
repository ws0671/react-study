import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function OverlayMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);
  const handleXbutton = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div
      className={`${
        mobileMenuOpen
          ? "translate-x-0 opacity-100  pointer-events-auto "
          : "translate-x-full opacity-0  pointer-events-none"
      } fixed inset-0 z-200 bg-red-400 p-6 transition-all duration-500
     `}
    >
      <div className="text-right" onClick={handleXbutton}>
        <FontAwesomeIcon className="text-2xl" icon={faXmark} />
      </div>
      <div className="space-y-1 text-xl mt-4 font-bold">
        <div>WOMEN</div>
        <div>MEN</div>
        <div>BABY</div>
        <div>KIDS</div>
      </div>
    </div>
  );
}
