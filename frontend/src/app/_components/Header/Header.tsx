import Image from "next/image";
import Link from "next/link";
import Checkout from "../Checkout/Checkout";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "НҮҮР" },
    { href: "/food-menu", label: "ХООЛНЫ ЦЭС" },
    { href: "/delivery-zone", label: "ХҮРГЭЛТИЙН БҮС" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 h-16 shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/">
              <div className="relative w-8 h-8">
                <Image
                  src="/Icons/Logo.svg"
                  alt="Food Delivery Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`px-4 py-2 transition-colors hover:text-[#18BA51] ${
                      pathname === link.href
                        ? "text-[#18BA51]"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Cart and Auth */}
          <div className="hidden md:flex items-center gap-4">
            <div className={pathname === "/checkout" ? "text-[#18BA51]" : ""}>
              <Checkout />
            </div>
            <Link href="/sign-in">
              <div
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:text-[#18BA51] transition-colors ${
                  pathname === "/sign-in" ? "text-[#18BA51]" : "text-gray-700"
                }`}
              >
                <Image
                  src="/Icons/UserIcon.svg"
                  alt="User Icon"
                  width={16}
                  height={16}
                />
                <span>Нэвтрэх</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/Icons/Logo.svg"
                alt="Food Delivery Logo"
                width={31.26}
                height={26.76}
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <button
                  className={`w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                    pathname === link.href ? "text-[#18BA51]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Bottom Section */}
          <div className="mt-auto border-t">
            <div className="px-6 py-4">
              <div className="mb-4">
                <Checkout />
              </div>
              <Link
                href="/sign-in"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 py-2 ${
                  pathname === "/sign-in" ? "text-[#18BA51]" : "text-gray-700"
                }`}
              >
                <Image
                  src="/Icons/UserIcon.svg"
                  alt="User Icon"
                  width={16}
                  height={16}
                />
                <span>Нэвтрэх</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
