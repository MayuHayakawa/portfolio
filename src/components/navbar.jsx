import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as Scroll } from "react-scroll";

import { navbarLinks } from "../constants/index";


const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return(
    <>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="sticky top-4 right-4 text-3xl z-10"
      >
        { isOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
      </div>
      <div className="relative">
        <nav 
          className={`absolute flex flex-col h-screen w-screen py-32 justify-between items-center transition-all duration-500 
            ${ isOpen
              ? "top-0 opacity-100 z-1"
              : "top-[-200px] opacity-0 z-[-1]"
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
              className="cursor-pointer"
            >
              {link.label}
            </Scroll>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Navbar;




