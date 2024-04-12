import "./Navbar.css";
import menu from "../../Assets/menu.png"
import cross from "../../Assets/cross.png"
import { useRef,memo } from "react";


const Navbar = () => {
const menuRef= useRef()

const openMenu=()=>{
    menuRef.current.style.left="50%";
}
const closeMenu=()=>{
  menuRef.current.style.left="100%";
}

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo" id="demo">
             RAJESH LINGALA
        </div>
        <div  className="navlinks">
          <img className="menubar" onClick={openMenu} src={menu} alt="" />
          <ul ref={menuRef} className="nav-links">
            <li>
              <img src={cross} onClick={closeMenu}  className="menu" alt="" />
            </li>
            <li>
            <a onClick={closeMenu} href="#profile">Home</a>
            </li>
            <li>
              <a onClick={closeMenu} href="#about">About</a>
            </li>
            <li>
              <a onClick={closeMenu} href="#skills">Skills</a>
            </li>
            <li>
              <a onClick={closeMenu} href="#education" onclick="toggleMenu()">
                Education
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#projects">Projects</a>
            </li>
            <li>
              <a onClick={closeMenu} href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
