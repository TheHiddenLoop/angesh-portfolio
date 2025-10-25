import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../context/Theme";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <footer className="bg-bgSecondary border-t border-borderGlass py-8">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-6">
        <div className="flex justify-between items-center text-center flex-wrap md:flex-nowrap gap-4 md:gap-0">
          <p className="text-textSecondary m-0">&copy; 2025 Angesh Chauhan</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/TheHiddenLoop" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-textSecondary text-xl flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:text-primaryColor hover:bg-bgGlass hover:-translate-y-1"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/angesh-chauhan-06a620265/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-textSecondary text-xl flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:text-primaryColor hover:bg-bgGlass hover:-translate-y-1"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://x.com/chauhan_an25038" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-textSecondary text-xl flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:text-primaryColor hover:bg-bgGlass hover:-translate-y-1"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <span 
              onClick={()=>toggleDarkMode(!darkMode)}
              className="text-[#3B3B3B] text-xl flex cursor-pointer items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 hover:text-primaryColor hover:bg-bgGlass hover:-translate-y-1"
            >
              {darkMode ? <Moon fill="#ffffff"/> : <Sun fill="#FF7043"/>}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
