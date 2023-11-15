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
      <Link href="cookie-home/">
        <h3>Mo's Dough</h3>
      </Link>
      <nav ref={navRef}>
        <Link className="navLink" onClick={showNavBar} href="/cookie-about">
          About
        </Link>
        <Link className="navLink" onClick={showNavBar} href="/cookie-menu">
          Menu
        </Link>
        <Link className="navLink" onClick={showNavBar} href="/order-form">
          Cart
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes className="faTimes" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars className="faBars" />
      </button>
    </header>
  );
}

export default NavBar;
