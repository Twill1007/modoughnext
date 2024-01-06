"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "./mainNav.css";

function MainNav() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <nav ref={navRef} className="main-nav-container">
        <div className="nav-links-left">
          <Link className="nav-link" onClick={showNavBar} href="/cookie-home">
            Mo's Dough
          </Link>
        </div>
        <div className="nav-links-right">
          <Link className="nav-link" onClick={showNavBar} href="/cookie-about">
            About
          </Link>
          <Link className="nav-link" onClick={showNavBar} href="/cookie-menu">
            Menu
          </Link>
          <Link className="nav-link" onClick={showNavBar} href="/order-form">
            Cart
          </Link>
        </div>
        <FaBars className="nav-btn" onClick={showNavBar} />

        <FaTimes className="nav-btn" onClick={showNavBar} />
      </nav>
    </header>
  );
}

export default MainNav;
