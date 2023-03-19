import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`flex items-center px-4 py-6 transition duration-500 md:px-16 ${
          showBackground ? "bg-zinc-900/90" : ""
        }`}>
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className="hidden ml-8 gap-7 lg:flex">
          {[
            "Home",
            "Series",
            "Films",
            "New & Popular",
            "My List",
            "Browse  by languages",
          ].map((item) => (
            <NavbarItem label={item} key={item} />
          ))}
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative flex items-center gap-2 ml-8 cursor-pointer lg:hidden">
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex items-center ml-auto gap-7">
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="relative flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
              <img src="/images/default-green.png" alt="profile-image" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
