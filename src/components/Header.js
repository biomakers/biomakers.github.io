import React from "react";
import { Link } from "gatsby";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <header className="bg-emerald-800">
      <div className="max-w-5xl mx-auto px-2">
        <Navbar fluid className="bg-transparent">
          <Navbar.Brand className="h-12">
            <span className="font-normal self-center text-lg text-rose-100">
              MIT BioMakers
            </span>
          </Navbar.Brand>

          <Navbar.Toggle className="text-rose-100 rounded-none hover:bg-emerald-900 focus:ring-0" />

          <Navbar.Collapse>
            <Navbar.Link
              className="font-light text-rose-100 md:hover:text-rose-300 border-0 hover:bg-emerald-900"
              href="/"
            >
              Home
            </Navbar.Link>

            <Navbar.Link
              className="font-light text-rose-100 md:hover:text-rose-300 border-0 hover:bg-emerald-900"
              href="/genesis"
            >
              Genesis: IAP 2024 Design Challenge
            </Navbar.Link>

            <Navbar.Link
              className="font-light text-rose-100 md:hover:text-rose-300 border-0 hover:bg-emerald-900"
              target="_blank"
              href="https://giving.mit.edu/search/node/2860813"
            >
              Donate
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
