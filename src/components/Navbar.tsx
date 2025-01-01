import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlLogin } from "react-icons/sl";
import { useState, useEffect } from "react";
import logo from "../assets/LogoKKN.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  const itemNav = [
    {
      item: "Beranda",
      to: "/",
    },
    {
      item: "Tentang ",
      to: "/about",
    },
    {
      item: "FAQ",
      to: "/faq",
    },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

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

  return (
    <div
      className={`flex items-center justify-between shadow-sm h-20 px-6 md:px-6 fixed w-full z-50 transition-transform duration-300 bg-white ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img className="w-14 bg-red-300" src={logo} alt="" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex space-x-4 md:space-x-6">
          {itemNav.map((item, index) => (
            <li
              onClick={() => navigate(item.to)}
              className={`cursor-pointer text-sm md:text-base hover:text-green-400 hover:scale-110 transition-transform ${
                path === item.to ? "text-green-400" : ""
              }`}
              key={index}
            >
              {item.item}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="hidden md:block">
        <div className="flex items-center space-x-4 md:space-x-6 ">
          {/* Login Button */}
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
      <div className="md:hidden relative ">
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
                  path === item.to ? "text-green-400" : "text-gray-700"
                }`}
                key={index}
              >
                <p className="hover:scale-110 transition-transform duration-300 ease-in-out text-sm md:text-base">
                  {item.item}
                </p>
              </li>
            ))}
            <li className="cursor-pointer px-4 py-2 hover:bg-green-50 hover:text-green-400 transition-colors duration-300 ease-in-out">
              <div
                className="flex items-center space-x-2 cursor-pointer hover:text-green-400 hover:scale-110 transition-transform duration-300 ease-in-out"
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
  );
};

export default Navbar;
