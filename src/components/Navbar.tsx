
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-transparent" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Pill-shaped navigation container */}
        <div className={cn(
          "flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full transition-all duration-300",
          "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg"
        )}>
          {/* Logo - Much Bigger */}
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Majd Alsurihi Portfolio"
          >
            <img 
              src={portfolioConfig.personal.logo}
              alt="Majd Alsurihi Logo" 
              className="h-16 w-auto" // Increased from h-12 to h-16
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {portfolioConfig.navigation.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className={cn(
                  "relative text-gray-800 hover:text-blue-600 py-2 px-4 rounded-full transition-all duration-300",
                  "hover:bg-white/20",
                  item.id === "home" ? "bg-blue-100 text-blue-600 font-medium" : ""
                )}
                onClick={item.href === "#" ? (e) => {
                  e.preventDefault();
                  scrollToTop();
                } : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-3 rounded-full hover:bg-white/20 transition-colors duration-300" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          {portfolioConfig.navigation.map((item) => (
            <a 
              key={item.id}
              href={item.href}
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 transition-colors duration-300" 
              onClick={(e) => {
                if (item.href === "#") {
                  e.preventDefault();
                  scrollToTop();
                }
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
