
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
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      )}
    >
      <div className="container flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Pill-shaped navigation container */}
        <div className={cn(
          "flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full transition-all duration-300",
          "bg-white/30 backdrop-blur-xl border border-pulse-200/50 shadow-lg hover:bg-white/40 hover:border-pulse-300/60"
        )}>
          {/* Logo - Much Bigger */}
          <a 
            href="#" 
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Majd Alsurihi Portfolio"
          >
            <img 
              src={portfolioConfig.personal.logo}
              alt="Majd Alsurihi Logo" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {portfolioConfig.navigation.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className={cn(
                  "relative text-gray-800 hover:text-pulse-600 py-2 px-4 rounded-full transition-all duration-300",
                  "hover:bg-pulse-50 hover:shadow-md hover:scale-105",
                  "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-pulse-200/30 before:to-pulse-300/30 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
                  item.id
                )}
                onClick={item.href === "#" ? (e) => {
                  e.preventDefault();
                  scrollToTop();
                } : undefined}
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-3 rounded-full hover:bg-pulse-100 transition-all duration-300 hover:scale-110" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Improved Design */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden transition-all duration-500 ease-in-out",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center">
          {portfolioConfig.navigation.map((item, index) => (
            <a 
              key={item.id}
              href={item.href}
              className={cn(
                "text-2xl font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-pulse-100 hover:text-pulse-600 hover:scale-105 hover:shadow-lg",
                "transform",
                isMenuOpen ? `animate-fade-in` : "",
                item.id
              )}
              style={{ animationDelay: `${index * 100}ms` }}
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
