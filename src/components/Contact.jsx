const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-[80px] py-16 relative bg-bgPrimary"
    >
      <div className="max-w-[1200px] mx-auto z-10 w-full px-2 md:px-6">
        <h2 className="fade-in text-3xl sm:text-4xl md:text-[2.5rem] text-center font-bold mb-12 md:mb-[60px] text-textPrimary">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-start">
          <div className=" slide-in-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-textPrimary mb-4">
              Let's Work Together
            </h3>
            <p className="text-textSecondary text-[1rem] sm:text-[1.1rem] leading-[1.6] sm:leading-[1.8] mb-6 sm:mb-8">
              I’m always excited to explore new opportunities, collaborate on creative projects, or discuss potential partnerships. Don’t hesitate to get in touch!
            </p>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-bgGlass backdrop-blur-[10px] border border-borderGlass rounded-xl transition-transform duration-300 hover:-translate-y-1 shadow-glass">
              <div className="contact-icon w-12 h-12 sm:w-[50px] sm:h-[50px] bg-primary text-white rounded-full flex items-center justify-center text-[1.2rem] sm:text-xl flex-shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4 className="text-textPrimary font-medium mb-1 text-sm sm:text-base">
                  Email
                </h4>
                <a
                  href="mailto:chauhanangesh36@gmail.com"
                  className="text-textSecondary hover:text-primaryColor transition-colors text-sm sm:text-base"
                >
                  chauhanangesh36@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="social-links slide-in-right">
            <h3 className="text-xl sm:text-2xl font-semibold text-textPrimary mb-4">
              Follow Me
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-4">
              <a
                href="https://github.com/TheHiddenLoop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 sm:p-6 text-textPrimary hover:text-[#0077B5] transition-transform duration-300 hover:-translate-y-2 glass-card"
              >
                <i className="fab fa-github text-xl sm:text-2xl mb-2"></i>
                <span className="font-medium text-sm sm:text-base">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/angesh-chauhan-06a620265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 sm:p-6 text-textPrimary hover:text-[#0077B5] transition-transform duration-300 hover:-translate-y-2 glass-card"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl mb-2"></i>
                <span className="font-medium text-sm sm:text-base">LinkedIn</span>
              </a>

              <a
                href="https://x.com/chauhan_an25038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 sm:p-6 text-textPrimary hover:text-[#1DA1F2] transition-transform duration-300 hover:-translate-y-2 glass-card"
              >
                <i className="fab fa-twitter text-xl sm:text-2xl mb-2"></i>
                <span className="font-medium text-sm sm:text-base">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
