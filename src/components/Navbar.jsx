import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMobileAlt  } from "@fortawesome/free-solid-svg-icons";
import { useAppState } from "../context/AppContext";
import { useEffect  } from "react";

const data = [
  {
    text:"home" , path: ""
  },
  {
    text:"about" , path: "about"
  },
  {
    text:"our services" , path: "services"
  },
  {
    text:"projects" , path: "projects"
  },
  {
    text:"contact us" , path: "contact-us"
  },
]

const NavigationLink = ({ children, href }) => {
  return (
    <a href={`#${href}`}>  
      <li className="lg:hover:text-main-primary uppercase text-base	">
        {children}
      </li>
    </a>
  )
}


const Navbar = () => {
  const [nav , setNav] = useState(false)
  const { menu, showMenu , hideMenu} = useAppState()

  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if(window.pageYOffset === 0){
        setNav(false)
      }else{
        setNav(true)
      }
    })
     
  } , [])


  return (
    <nav className={` bg-main-black drop-shadow-sm shadow-white z-50  ${nav ? "lg:bg-main-black" : "lg:bg-transparent"}  text-white fixed top-0 w-full transition-colors duration-300`}>
      <div className="container max-w-screen-2xl flex justify-between items-center h-16 lg:flex-row-reverse text-lg">
        
        <div>
          <FontAwesomeIcon 
                icon={faBars} 
                className="text-white text-2xl cursor-pointer lg:hidden" 
                onClick={menu ? hideMenu : showMenu}
                />
          <div className="hidden lg:block">
            <FontAwesomeIcon icon={faMobileAlt} className="pr-2 text-main-primary"/>
            <span>1-300-123-123</span>
          </div>
        </div>

        <ul className="gap-5 hidden lg:flex">

            {
              data.map(item => {
                return(
                  <NavigationLink href={item.path} >{item.text}</NavigationLink>
                )
              })
            }

        </ul>

        <div>
            <div className="">
                <img src="/images/logo.png" alt="" />
            </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;


