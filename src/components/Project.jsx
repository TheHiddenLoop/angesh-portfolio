import { useState } from "react";
import { ExternalLink } from "lucide-react";
import auth from "../asset/auth.png"
import inventory from "../asset/inventry.png"
import bank from "../asset/bank.png"
import chat from "../asset/chat.png"
import expense from "../asset/expense.png"
import html from "../asset/html.jpeg"
import react from "../asset/react.jpeg"
import blog from "../asset/blog.png"
import nexcent from "../asset/image.png"


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

    const projectsData = {
        fullStack: [
            {
                id: 1,
                title: "Chat Based Web Application",
                description:
                    "A real-time chat application built with authentication and socket-based communication.",
                image:
                    chat,
                link: "https://chat-app-5t98.onrender.com/",
            },
            {
                id: 2,
                title: "Blog Web Application",
                description:
                    "A blogging platform with authentication, CRUD features, and modern UI.",
                image:
                    blog,
                link: "https://thinkscribe.vercel.app/",
            },
            {
                id: 3,
                title: "Expense Tracker with Redux",
                description:
                    "A finance management app built with Redux for state management.",
                image:
                    expense,
                link: "https://expense-apii.onrender.com/",
            },
            {
                id: 4,
                title: "Authentication Application",
                description:
                    "A secure authentication system with signup, login, and email verification.",
                image:
                    auth,
                link: "https://auth-stack-app.onrender.com/",
            },
            {
                id: 5,
                title: "Inventory Management System",
                description:
                    "A simple inventory tracking app to manage stock and products.",
                image:
                    inventory,
                link: "https://inventory-management-system-3kay.onrender.com",
            },
            {
                id: 6,
                title: "Bank Management System",
                description:
                    "A system to manage customer accounts, transactions, and banking operations.",
                image:
                    bank,
                link: "https://github.com/TheHiddenLoop/bank-management-system",
            },
        ],
        webDesign: [
            {
                id: 7,
                title: "50+ Mini Project HTML/CSS/JS",
                description:
                    "A sleek and modern website built using HTML, CSS, and JavaScript with smooth animations.",
                image:
                    html,
                link: "https://github.com/TheHiddenLoop/Javascript",
            },
            {
                id: 8,
                title: "Nexcent",
                description:
                    "A creative portfolio website with stunning visuals and clean UI.",
                image:
                    nexcent,
                link: "https://buildwitharya.vercel.app/",
            },
            {
                id: 9,
                title: "30+ Mini Project with React",
                description:
                    "A small React project demonstrating component reusability and hooks.",
                image:
                    react,
                link: "https://github.com/TheHiddenLoop/React-Projects",
            },
        ],
    };

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
            <div className="max-w-[1200px] mx-auto px-6">
                <h2
                    className="text-4xl font-bold text-center mb-12 fade-in"
                    style={{ color: "var(--text-primary)" }}
                >
                    My Projects
                </h2>

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
                                        background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`,
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
                            className="px-8 py-3 bg-[var(--bg-glass)] text-textPrimary border-2 border-[#3B82F6] rounded-md transition-all duration-300 hover:bg-[#3B82F6]"
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
    return (
        <div
            className="glass-card h-full flex flex-col overflow-hidden scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textSecondary text-2xl hover:text-blue-400 transition-all duration-300 hover:scale-125"
                        >
                            <ExternalLink size={32} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                >
                    {project.title}
                </h3>
                <p
                    className="leading-relaxed mb-6 flex-1"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {project.description}
                </p>
                {project.link && (
                    <CustomButton
                        asChild
                        className="w-full"
                        style={{
                            background: "var(--primary-color)",
                            color: "white",
                        }}
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit Site
                        </a>
                    </CustomButton>
                )}
            </div>
        </div>
    );
};

export default Projects;
