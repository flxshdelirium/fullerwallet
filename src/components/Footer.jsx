import React from "react";
import { NavLink as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { IoLogoTwitter as TwitterLogo } from "react-icons/io";
import { RiInstagramFill as IgLogo } from "react-icons/ri";
import { FaFacebook as FbLogo } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      link: "https://www.twitter.com",
      logo: <TwitterLogo />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com",
      logo: <FbLogo />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com",
      logo: <IgLogo />,
    },
  ];
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-links col1">
          <h2 className="footer-links-title">Company</h2>
          <LinkScroll
            to="setup"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About Us
          </LinkScroll>
          <LinkScroll
            to="setup"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            How To Setup
          </LinkScroll>
          <LinkScroll
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            What We Offer
          </LinkScroll>
          <LinkScroll
            to="newsletter"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Get Tips and Tricks
          </LinkScroll>
        </div>
        <div className="footer-links col2">
          <h2 className="footer-links-title">Legal</h2>
          <LinkRouter to="/tos">Terms and Conditions</LinkRouter>
          <LinkRouter to="/privacy">Privacy</LinkRouter>
        </div>
        <div className="footer-links col3">
          <h2 className="footer-links-title">Get the App</h2>
          <a
            href="https://www.apple.com/app-store/"
            rel="noopener noreferrer"
            target="_blank"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/category/FINANCE?hl=en&gl=US"
            rel="noopener noreferrer"
            target="_blank"
          >
            Play Store
          </a>
        </div>
        <div className="footer-cta">
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                href={`${social.link}`}
                key={social.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.logo}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          Copyright &copy; 2021 Fuller Wallet.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
