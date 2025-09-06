import React from "react";

const About = () => {
  const sections = [
    {
      title: "Who I Am",
      content:
        "I'm a passionate MERN stack developer with a strong focus on building scalable, efficient, and user-friendly applications. I love turning complex ideas into seamless digital experiences.",
    },
    {
      title: "What I Do",
      content:
        "I specialize in React, Node.js, Express.js, and MongoDB — creating full-stack applications with clean code, responsive UI, and secure backend systems.",
    },
    {
      title: "What I Love",
      content:
        "From interactive dashboards to business solutions, I enjoy solving real-world problems through technology while delivering exceptional user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-bgSecondary to-bgSecondary/80 px-4 sm:px-10 md:px-[80px] py-0 relative"
    >
      <div className="max-w-[1200px] mx-auto py-20 md:py-20 px-2 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-textPrimary mb-6 tracking-tight">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-base sm:text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Every project is an opportunity to innovate, optimize, and push the
          boundaries of web development. Here's a little more about me:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/40 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {section.title}
              </h3>
              <p className="text-textSecondary leading-relaxed text-[15px]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
