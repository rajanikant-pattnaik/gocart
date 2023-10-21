// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-white text-2xl font-bold">My App</p>
        </Link>

        {/* Desktop Navigation */}
        <div className=" hidden md:flex space-x-4">
          <Link href="/products">
            <p className="text-white hover:text-gray-300">Stocks</p>
          </Link>
          <Link href="/sales">
            <p className="text-white hover:text-gray-300">Sales</p>
          </Link>
          <Link href="/profile">
            <p className="text-white hover:text-gray-300">Profile</p>
          </Link>
        </div>

        {/* Mobile Navigation (Toggle Button) */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-500">
            <Link href="/products">
              <p className="block p-3 text-white hover:text-gray-300">
                Products
              </p>
            </Link>
            <Link href="/sales">
              <p className="block p-3 text-white hover:text-gray-300">Sales</p>
            </Link>
            <Link href="/profile">
              <p className="block p-3 text-white hover:text-gray-300">
                Profile
              </p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
