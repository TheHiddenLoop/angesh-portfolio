import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const CustomButton = ({
  children,
  onClick,
  className = "",
  style = {},
  asChild,
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-0 outline-none";

  if (asChild && children?.type === "a") {
    return (
      <a
        {...children.props}
        className={`${baseClasses} ${className} inline-block text-center`}
        style={style}
      >
        {children.props.children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullStack");
  const [visibleProjects, setVisibleProjects] = useState(3);



  const tabs = [
    { id: "fullStack", label: "Full Stack" },
    { id: "webDesign", label: "Web Design" },
  ];

  const currentProjects = projectsData[activeTab] || [];
  const displayedProjects = currentProjects.slice(0, visibleProjects);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleProjects(3);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-[1200px] mx-auto px-2 sm:px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            My <span className="text-primary">Projects</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Transforming ideas into elegant solutions with cutting-edge
            technology
          </p>
        </div>

        <div className="hidden md:flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                relative inline-block cursor-pointer rounded-full px-6 py-3 font-medium text-sm sm:text-base
                border-2 transition-all duration-300 overflow-hidden backdrop-blur-sm
                hover:-translate-y-0.5
                before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full
                before:bg-gradient-to-r before:from-transparent before:via-blue-500/10 before:to-transparent
                before:transition-all before:duration-500 hover:before:left-full
                ${activeTab === tab.id
                  ? "bg-[var(--primary-color)] border-[var(--primary-color)] text-white"
                  : "bg-[var(--bg-glass)] border-[var(--primary-color)] text-[var(--text-primary)] hover:text-[var(--primary-color)]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="md:hidden space-y-16">
          {tabs.map((tab) => (
            <div key={tab.id} className="mb-16">
              <h3
                className="text-2xl font-semibold text-center mb-8 relative"
                style={{ color: "var(--text-primary)" }}
              >
                {tab.label}
                <div
                  className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-15 h-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--primary-color), var(--secondary-color))",
                  }}
                />
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {projectsData[tab.id].map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects < currentProjects.length && (
          <div className="hidden md:flex justify-center mt-8">
            <CustomButton
              onClick={loadMoreProjects}
              className="px-8 py-3 bg-[var(--bg-glass)] text-[var(--text-primary)] border-2 border-[var(--primary-color)] rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white"
            >
              View More Projects
            </CustomButton>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card h-full flex flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          loading="lazy"
        />

        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-md transition-transform duration-200 hover:scale-110"
              style={{ background: "var(--primary-color)" }}
            >
              <ExternalLink size={24} className="text-white" />
            </a>
          )}
        </div>

        {project.tech && (
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[140px]">
            {project.tech.slice(0, 2).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-semibold rounded-md backdrop-blur-md text-primary"
                style={{ background: "rgba(0, 0, 0, 0.7)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        <div
          className="flex items-center justify-between mt-auto pt-4 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tech &&
              project.tech.slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    color: "var(--primary-color)",
                    background: "rgba(59, 130, 246, 0.1)",
                  }}
                >
                  {tech}
                </span>
              ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold flex items-center gap-1 transition-all duration-200 hover:gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              View
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
