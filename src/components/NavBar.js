"use client";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "../UI/cartIcon";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import "../components/navBar.css";
import "../app/globals.css";

function NavBar() {
  const { items } = useCart();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="main-header">
      <Link className="nav-link" href="/cookie-home">
        Mo's Dough
      </Link>
      <nav ref={navRef}>
        <Link className="link" onClick={showNavBar} href="/cookie-about">
          About
        </Link>
        <Link className="link" onClick={showNavBar} href="/cookie-menu">
          Menu
        </Link>
        <Link className="link" onClick={showNavBar} href="/order-form">
          Cart
          <CartIcon cartItems={items} />
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
