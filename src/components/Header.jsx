import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] bg-bgGlass backdrop-blur-[20px] border-b border-b-borderGlass transition-shadow duration-300 ${isScrolled ? "shadow-glass" : ""
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Angesh Chauhan</div>

          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="relative text-textPrimary font-medium 
                      after:content-[''] after:absolute after:-bottom-1 after:left-0
                      after:h-[2px] after:w-0 after:bg-primary
                      after:transition-all after:duration-300 after:ease-in-out
                      hover:after:w-full hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button
              className="p-2 rounded-md text-primary hover:bg-bgSecondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        <div
          className={`md:hidden overflow-hidden transform origin-top transition-all duration-300 ${isMenuOpen ? "max-h-96 scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"
            }`}
        >
          <nav className="bg-bgGlass backdrop-blur-[20px] border-t border-b-borderGlass">
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="block text-textPrimary font-medium hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
