import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import Divider from "./Divider";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const savedTheme = localStorage.getItem("theme");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <nav
  className={cn(
    "fixed w-full z-40 transition-all duration-300",
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
  )}>

  <Divider height={400} />

  <div className="container mx-auto flex items-center justify-between">
    {/* Left: Title */}
    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
      <span className="relative z-10">
        <span className="text-glow text-foreground">Alarico </span>
        Mercado Vazquez
      </span>
    </a>

    {/* Right: Nav links */}
    <ul className="hidden md:flex space-x-8 z-40">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Mobile Nav */}

    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50">
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
    "transition-all duration-300 md:hidden",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
    <ul className="flex flex-col space-y-8 text-xl">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link to={item.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>

    {/* Toggle between dark and light mode */}
    <div className="relative z-50">
      <ThemeToggle />
    </div>
  </div>
</nav>

  );
}
