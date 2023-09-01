import { useState, useContext } from "react";
import LanguageContext from "../context/languagecontext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

import { navbarLinks } from "../constants/index";


const Navbar = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const [ isOpen, setIsOpen ] = useState(false);

  return(
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-8 right-8 text-3xl lg:text-5xl z-10 cursor-pointer"
      >
        { isOpen ? <AiOutlineClose className="text-gray-200" /> : <AiOutlineMenu /> }
      </div>
      <div 
        onClick={toggleLanguage}
        className="absolute top-8 right-24 text-3xl lg:text-5xl z-10 cursor-pointer"
      >
        <FaLanguage />
      </div>
      <nav 
        className={`absolute flex flex-col h-screen w-screen py-32 justify-between items-center transition-all duration-700 bg-primary-600
          ${ isOpen
            ? "top-0 opacity-100 z-5"
            : "top-[-1000px] opacity-0"
          }
        `}
      >
        { navbarLinks.map((link) => (
          <Scroll
            key={link.label}
            to={link.id}
            smooth={true}
            duration={600}
            offset={-30}
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 font-bold text-lg md:text-4xl"
          >
            {link.label}
          </Scroll>
        ))}
      </nav>
    </div>
  )
}

export default Navbar;




