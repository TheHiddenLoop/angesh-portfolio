import React, { useState, useEffect } from "react";
import { Download, Eye, ArrowRight } from "lucide-react";
import me from "../asset/me.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 800, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bgPrimary font-poppins">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 bg-bgSecondary rounded-full blur-2xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-bgSecondary rounded-full blur-2xl opacity-30" />
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-6 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className={`text-center md:text-left mt-16 md:mt-0 transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-bgSecondary text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for work
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-textPrimary">
              Hi, I'm <span className="text-primary">Angesh Chauhan</span>
            </h1>

            <h2 className="text-lg sm:text-xl text-textSecondary font-medium mb-4">
              MERN Stack Developer
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              MERN stack developer passionate about creating scalable, reliable, and user-focused web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToProjects}
                className="group bg-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Eye size={18} />
                View My Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href="/angesh-chauhan.pdf"
                target="_blank"
                download="Angesh_Chauhan_Resume.pdf"
                className="group border-2 border-gray-300 text-textSecondary px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          <div
            className={`relative flex justify-center mt-3 md:mt-0 transition-all duration-1200 ease-out delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 p-4">
              <img
                src={me}
                alt="Angesh Chauhan"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-1 text-textSecondary hover:text-primary transition-colors duration-200 group"
        >
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-2 bg-current rounded-full mt-1 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
