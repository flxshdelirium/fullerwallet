import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Sling as Hamburger } from "hamburger-react";
import { gsap } from "gsap";
import Logo from "../assets/fw-logo.webp";
import Button from "./auxiliary/Button";

const Navbar = () => {
  const navbarElements = [
    {
      name: "How To Setup",
      path: "setup",
      cItem: "nav-item",
      cLink: "nav-link",
    },
    {
      name: "What We Offer",
      path: "features",
      cItem: "nav-item",
      cLink: "nav-link",
    },
    {
      name: "FAQ",
      path: "faq",
      cItem: "nav-item",
      cLink: "nav-link",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  const nav = useRef(null);

  const navAnimation = gsap.timeline();
  useEffect(() => {
    navAnimation.from(nav.current, {
      duration: 0.8,
      delay: 0.6,
      y: -80,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="navbar-container" ref={nav}>
        <div className="nav-wrapper">
          <NavLink
            exact
            to="/"
            className="nav-logo"
            onClick={() => scroll.scrollToTop()}
          >
            <img src={Logo} alt="Fuller Wallet Logo" />
          </NavLink>
          <div className="hamburger-menu">
            <Hamburger
              size={23}
              duration={0.4}
              color={"#282860"}
              easing="ease-in-out"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            {navbarElements.map((link, i) => (
              <li className={link.cItem} key={`navbar-id-${i}`}>
                <LinkScroll
                  to={link.path}
                  className={link.cLink}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  exact="true"
                  isDynamic={true}
                  onClick={handleClick}
                >
                  {link.name}
                </LinkScroll>
              </li>
            ))}
            <LinkScroll
              to="download"
              smooth={true}
              duration={800}
              spy={true}
              offset={-80}
              exact="true"
            >
              <Button type="text" buttonStyle="cta-outline">
                DOWNLOAD APP
              </Button>
            </LinkScroll>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
