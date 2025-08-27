import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../context/Theme";

export default function Button() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />

        <div
          className={`block h-6 w-12 rounded-full border transition-colors duration-300 ${
            darkMode
              ? "bg-blue-600 border-blue-600"
              : "bg-[#fbfaea] border-[#BFCEFF]"
          }`}
        ></div>

        <div
          className={`absolute top-0.5 left-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {darkMode ? (
            <Moon className="h-3.5 w-3.5 text-blue-600" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-yellow-500" />
          )}
        </div>
      </div>
    </label>
  );
}
