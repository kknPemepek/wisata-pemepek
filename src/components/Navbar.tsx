import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlLogin } from "react-icons/sl";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/LogoKKN.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref untuk dropdown

  const itemNav = [
    { item: "Beranda", to: "/" },
    { item: "Tentang ", to: "/tentang" },
    { item: "FAQ", to: "/faq" },
    { item: "Wisata", to: "/wisata" },
  ];

  const cekPath = () => {
    if (path === "/pindah-alam") {
      setCurrentPath("/wisata");
    } else if (path === "/lembah-datu") {
      setCurrentPath("/wisata");
    } else if (path === "/wisata-kelicung") {
      setCurrentPath("/wisata");
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    cekPath();

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
        setMenuOpen(false);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      setScrollTimeout(
        setTimeout(() => {
          setIsHidden(false);
        }, 150)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex items-center justify-between shadow-sm h-20 px-6 md:px-6 fixed w-full z-50 transition-transform duration-300 bg-white ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img className="w-14 bg-red-300" src={logo} alt="Logo" />
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4 md:space-x-6">
            {itemNav.map((item, index) => (
              <li
                onClick={() => navigate(item.to)}
                className={`cursor-pointer text-sm md:text-base hover:text-green-400 hover:scale-110 transition-transform ${
                  path === item.to || currentPath === item.to ? "text-green-400" : ""
                }`}
                key={index}
              >
                {item.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div
              className="flex items-center space-x-2 cursor-pointer hover:text-green-400 hover:scale-110 transition-transform"
              onClick={() => navigate("/login")}
            >
              <SlLogin className="text-lg md:text-xl" />
              <p className="text-sm md:text-base">Login</p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            className="text-xl cursor-pointer focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu className="text-xl hover:text-green-400 hover:scale-110 transition-transform" />
          </button>
          <div
            className={`absolute right-0 mt-2 bg-white border rounded-lg shadow-md w-48 transition-all duration-300 ease-in-out transform ${
              menuOpen
                ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
                : "scale-90 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul>
              {itemNav.map((item, index) => (
                <li
                  onClick={() => {
                    navigate(item.to);
                    setMenuOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 hover:bg-green-50 hover:text-green-400 transition-colors duration-300 ease-in-out ${
                    path === item.to || currentPath === item.to ? "text-green-400" : ""
                  }`}
                  key={index}
                >
                  {item.item}
                </li>
              ))}
              <li className="cursor-pointer px-4 py-2 hover:bg-green-50 hover:text-green-400 transition-colors duration-300 ease-in-out">
                <div
                  className="flex items-center space-x-2 cursor-pointer hover:text-green-400 hover:scale-110 transition-transform"
                  onClick={() => navigate("/login")}
                >
                  <SlLogin className="text-sm md:text-base" />
                  <p className="text-sm md:text-base">Login</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
