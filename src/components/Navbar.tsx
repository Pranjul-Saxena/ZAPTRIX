import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleDollarSign } from 'lucide-react';
import {
  Home,
  Lightbulb,
  Code2,
  Users,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ZLogo from "./ZLogo";


// Types
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Navigation Items
const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home size={20} /> },
  { label: "Submit Idea", href: "/submit", icon: <Lightbulb size={20} /> },
  // { label: "Marketplace", href: "/developers", icon: <Code2 size={20} /> },
  // { label: "Mentors", href: "/mentors", icon: <Users size={20} /> },
  { label: "Sell Idea", href: "/sellidea", icon: <CircleDollarSign size={20} /> },
  { label: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: <Github size={20} /> },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={20} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter size={20} />,
  },
];

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events for navbar background
  useEffect(() => {
    const handleScroll = () => {
      // setIsDark(window.scrollY > 50);
      setIsDark(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed w-[95%] bg-gray-700/85 rounded-full ml-2 sm:ml-10 mt-4 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ZLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-indigo-500"
                    : "text-gray-300 hover:text-indigo-400"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              to="/securesubmit" // Replace with your actual secure submission route
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors inline-block text-center"
            >
              Secure Submit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Mobile menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-64 bg-gray-900 shadow-lg md:hidden"
            >
              <div className="p-4">
                <div className="flex justify-end">
                  <button
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mt-8 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center space-x-2 p-2 rounded-lg ${
                        location.pathname === item.href
                          ? "bg-indigo-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <button
                    className="w-full bg-indigo-600 text-white p-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
                    onClick={() => {
                      /* TODO: Implement Secure Submit ? in logic */
                    }}
                  >
                    Secure Submit
                  </button>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-8 left-0 right-0 px-4">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition-colors"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
