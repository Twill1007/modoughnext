"use client";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link className="navLink" href="/cookie-home">
          Home
        </Link>
        <Link className="navLink" href="/cookie-about">
          About
        </Link>
        <Link className="navLink" href="/cookie-menu">
          Menu
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
