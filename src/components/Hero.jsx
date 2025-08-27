import me from "../asset/me.jpg"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden 
                 bg-[linear-gradient(135deg,var(--bg-primary)_0%,var(--bg-secondary)_100%)]"
    >
      <div
        className="absolute inset-0 
                   bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]
                   animate-[float_6s_ease-in-out_infinite] z-0"
      ></div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-6 z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="hero-text text-primary text-center md:text-left mt-16 md:mt-0">
            <h1 className="text-3xl sm:text-4xl text-textSecondary md:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="relative text-primary">Angesh Chauhan</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8">
              Building modern web experiences with the MERN stack — turning ideas
              into interactive, scalable, and beautiful applications.
            </p>

            <div className="hero-buttons flex justify-center md:justify-start gap-3 md:gap-4">
              <button onClick={scrollToProjects} className="bg-primary text-white rounded-lg px-5 py-3 font-medium text-sm sm:text-base transition-skin hover:bg-[#2563EB] hover:-translate-y-0.5 hover:shadow-md inline-block cursor-pointer">
                View My Project
              </button>
              <a
                href="/angesh-chauhan.pdf"
                target="_blank"
                download="Angesh_Chauhan_Resume.pdf"
                className="border-2 border-primary text-primary rounded-lg px-5 py-3 font-medium text-sm sm:text-base transition-skin hover:bg-primary hover:text-white hover:shadow-md inline-block cursor-pointer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image relative flex justify-center items-center mt-8 md:mt-0 slide-in-right">
            <div className="image-container flex justify-center items-center relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 p-4">
              <img
                src={me}
                alt="Angesh Chauhan"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative z-10"
              />

              <div className="image-decoration absolute inset-0 w-full h-full border-2 border-primary rounded-full opacity-30 animate-[rotate_20s_linear_infinite]">
                <div className="absolute inset-5 border-2 border-secondary rounded-full animate-[rotate_15s_linear_infinite_reverse]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
