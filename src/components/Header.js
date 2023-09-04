import React from "react";
import { Link } from "gatsby";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <header className="max-w-5xl mx-auto">
      <Navbar fluid>
        <Navbar.Brand>
          <span className="self-center font-semibold">MIT BioMakers</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="/initiatives">Community initiatives</Navbar.Link>
          <Navbar.Link href="/projects">Independent projects</Navbar.Link>
          <Navbar.Link href="/faqs">FAQs</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
