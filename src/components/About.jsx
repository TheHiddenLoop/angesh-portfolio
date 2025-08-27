import me from "../asset/me2.jpeg"

const About = () => {
const aboutSections = [
  {
    title: "Who I Am",
    content:
      "I'm a passionate MERN stack developer with a strong focus on building scalable, efficient, and user-friendly applications. With expertise in modern JavaScript technologies and a problem-solving mindset, I love turning complex ideas into seamless digital experiences.",
  },
  {
    title: "What I Do",
    content:
      "I specialize in developing full-stack web applications using React, Node.js, Express.js, and MongoDB, along with MySQL for relational data needs. My work combines clean code practices with modern design principles to deliver responsive, secure, and high-performing applications.",
  },
  {
    title: "What I Love Building",
    content:
      "From interactive dashboards to complete business solutions, I enjoy building applications that not only solve real-world problems but also deliver great user experiences. Every project is an opportunity to innovate, optimize, and push the boundaries of modern web development.",
  },
];


  return (
    <section
      id="about"
      className="bg-bgSecondary px-4 sm:px-10 md:px-[80px] py-0 relative"
    >
      <div className="max-w-[1200px] mx-auto py-20 md:py-20 px-2 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-center mb-10 md:mb-[60px] text-textPrimary fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[4rem] items-center">
          
          <div className="relative slide-in-left">
            <div className="relative overflow-hidden rounded-[20px] shadow-md h-[600px] 
                            before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br 
                            before:from-blue-500/20 before:to-green-500/20 before:z-10 before:pointer-events-none">
              <img
                src={me}
                alt="Angesh Chauhan working"
                className="w-full h-full object-cover transition-transform hover:scale-[1.05]"
              />
            </div>
          </div>

          <div className="slide-in-right">
            <div className="p-4 md:p-8">
            {aboutSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-semibold text-primary mb-4 mt-6 md:mt-8">
                  {section.title}
                </h3>
                <p className="text-textPrimary">{section.content}</p>
              </div>
            ))}
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
