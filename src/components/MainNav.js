import React from "react";
import Link from "next/link";
import "./mainNav.css";

function MainNav() {
  return (
    <header>
      <nav className="main-nav-container">
        <div className="nav-links-left">
          <Link className="nav-link" href="/cookie-home">
            Mo's Dough
          </Link>
        </div>
        <div className="nav-links-right">
          <Link className="nav-link" href="/cookie-about">
            About
          </Link>
          <Link className="nav-link" href="/cookie-menu">
            Menu
          </Link>
          <Link className="nav-link" href="/order-form">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNav;
