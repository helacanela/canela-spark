import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold">
          <span className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>Canela</span>
          <span className="text-coral"> Digital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-coral ${
                isScrolled ? "text-muted-foreground" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={scrollToContact}
            size="sm"
            className="bg-coral hover:bg-coral/90 text-white font-display font-semibold rounded-xl shadow-button hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            Консультация
          </Button>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <nav className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="bg-coral hover:bg-coral/90 text-white font-display font-semibold w-full mt-2 rounded-xl h-12"
              >
                Записаться на консультацию
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
