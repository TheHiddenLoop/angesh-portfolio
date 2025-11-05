const Skills = () => {
  const skills = [
    { name: "React", icon: "fab fa-react", color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: "fas fa-book", color: "text-[#3178C6]" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-[#E34F26]" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-[#1572B6]" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-[#339933]" },
    { name: "Express.js", icon: "fas fa-server", color: "text-[#ffffff]" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-[#47A248]" },
    { name: "MySQL", icon: "fas fa-database", color: "text-[#00758F]" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-[#336791]" },
    {
      name: "Redux Toolkit",
      icon: "fas fa-layer-group",
      color: "text-[#764ABC]",
    },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-[#06B6D4]" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-[#F05032]" },
    { name: "GitHub", icon: "fab fa-github", color: "text-[#333333]" },
    { name: "Postman", icon: "fas fa-envelope", color: "text-[#FF6C37]" },
    {
      name: "Vercel",
      icon: "fas fa-cloud-upload-alt",
      color: "text-[#ffffff]",
    },
    { name: "Netlify", icon: "fas fa-layer-group", color: "text-[#00C7B7]" },
    { name: "Render", icon: "fas fa-cube", color: "text-[#46E3B7]" },
    { name: "Cloudinary", icon: "fas fa-image", color: "text-[#3448C5]" },
    { name: "Python", icon: "fab fa-python", color: "text-[#3776AB]" },
    { name: "Java", icon: "fab fa-java", color: "text-[#007396]" },
    { name: "C++", icon: "fas fa-terminal", color: "text-[#00599C]" },
    {
      name: "Responsive Design",
      icon: "fas fa-mobile-alt",
      color: "text-[#4A90E2]",
    },
  ];

  return (
    <section id="skills" className="bg-[linear-gradient(to_top_right,var(--bgPrimary),var(--bgSecondary),var(--borderGlass),var(--bgGlass))] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-textPrimary mb-6 tracking-tight"
        >
          My Skills & <span className="text-primary">Technologies</span>
        </h2>

        <p className="text-base sm:text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          A showcase of the tools and technologies I use to craft dynamic,
          responsive, and intelligent web experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group p-6 md:p-8 text-center rounded-xl 
                border border-borderGlass bg-bgGlass shadow-glass backdrop-blur-xl
                transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.6)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:left-full
                  pointer-events-none rounded-xl"
              />

              <div
                className={`text-4xl md:text-5xl mb-4 transition-all duration-300 ${skill.color}
                  hover:text-primary`}
              >
                <i className={skill.icon}></i>
              </div>

              <h3
                className="text-base md:text-lg font-medium text-textPrimary 
                transition-colors duration-300 group-hover:text-primary"
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
