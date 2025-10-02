import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9833225797</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@aaumgloballogistics.in</span>
            </div>
          </div>
          <div className="hidden md:flex">
            <span>24/7 Global Logistics Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* <img 
              src="/lovable-uploads/LOGO-AAUM.png" 
              alt="AAUM Global Logistics" 
              className="h-10 w-auto"
            /> */}
             <img 
              src="/lovable-uploads/Vertical-AAUM-Logo.png" 
              alt="AAUM Global Logistics" 
              className="h-12 w-auto"
            />
            {/* <div className="text-xl font-bold">
              <span className="text-accent animate-slide-in-right">AA</span>
              <span className="text-primary animate-slide-in-right" style={{ animationDelay: '0.1s' }}>UM</span>
              <span className="text-muted-foreground ml-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>GLOBAL LOGISTICS</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="hero" size="sm">
              <a href="/contact" target="_blank" rel="noopener noreferrer">
              Get Quote </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
               <a href="/contact" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm" className="w-fit">
                Get Quote
              </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;