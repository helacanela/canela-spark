import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Кому подходит", href: "#audience" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className={isScrolled ? "text-foreground" : "text-white"}>Canela</span>
          <span className="text-raspberry"> Digital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors hover:text-raspberry ${
                isScrolled ? "text-foreground/70" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={scrollToContact}
            size="sm"
            className="bg-raspberry hover:bg-raspberry/90 text-white font-display font-semibold text-[13px] h-9 px-5"
          >
            Обсудить задачу
          </Button>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 font-medium py-2 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="bg-raspberry hover:bg-raspberry/90 text-white font-display font-semibold w-full mt-2"
              >
                Обсудить задачу
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
