import { skills } from "../data/skills";

const Skills = () => {

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
