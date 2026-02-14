import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Confirmar Presença", href: "#rsvp" },
    { label: "Lista de Presentes", href: "#gifts" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-lavender/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Names */}
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary sparkle-animation" />
            <span className="text-lg sm:text-xl font-bold text-gradient font-tangled">Giovana & Bruno</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm lg:text-base text-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;