import ecom from "../assets/ecom.png";
import aiSaas from "../assets/aiSaas.png";
import chat from "../assets/chat.png";
import blog from "../assets/blog.png";
import expense from "../assets/expense.png";
import auth from "../assets/auth.png";
import gradient from "../assets/gradient.png";
import inventory from "../assets/inventry.png";
import bank from "../assets/bank.png";
import html from "../assets/html.jpeg";
import react from "../assets/react.jpeg";
import nexcent from "../assets/image.png";
import interviewPlatform from "../assets/interviewPlatform.png"
import portfolio from "../assets/port.png"
import estate from "../assets/estate.png";
import chatbot from "../assets/chatbot.png";

export const projectsData = {
  fullStack: [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce platform with product listings, cart, checkout, and Stripe payment integration.",
      image: ecom,
      link: "https://e-cltx.vercel.app/",
      tech: ["MERN", "Stripe", "Redux"],
      source: "https://github.com/TheHiddenLoop/e-commerce",
    },
    {
      id: 2,
      title: "AI SaaS Platform",
      description:
        "A subscription-based AI SaaS platform that allows to generate blogs, images, and resume reviews API, with authentication and payment powered by Clerk.",
      image: aiSaas,
      link: "https://cognifyx-ai.vercel.app/",
      tech: ["PERN", "Clerk", "Gemini", "Clipdrop"],
      source: "https://github.com/TheHiddenLoop/Cognify-ai",
    },
    {
      id: 3,
      title: "Chat Based Web Application",
      description:
        "A real-time chat application built with authentication and socket-based communication.",
      image: chat,
      link: "https://chat-app-5t98.onrender.com/",
      tech: ["React", "Socket.io", "Node.js"],
      source: "https://github.com/TheHiddenLoop/Chat_App",
    },
    {
      id: 11,
      title: "AI Chatbot Platform (Text & Image Generation)",
      description:"AI chatbot with text & image generation, powered by Gemini API and Stripe-based credit subscriptions.",
      image: chatbot, 
      link: "https://quickgpt-chat.vercel.app/",
      tech: [
        "MERN",
        "Gemini API",
        "Stripe",
        "Webhooks",
        "JWT",
        "Tailwind",
      ],
      source: "https://github.com/TheHiddenLoop/quickgpt-chat",
    },

    {
      id: 4,
      title: "Video Interview Platform",
      description:
        "A remote technical interview platform with real-time video calling, collaborative coding, problem sharing, and session chat.",
      image: interviewPlatform, // whatever your import is
      link: "https://video-calling-interview-pla-qgvmq.sevalla.app/",
      tech: ["MERN", "WebRTC", "Tailwind"],
      source: "https://github.com/your-repo/video-interview-platform",
    },

    {
      id: 5,
      title: "Blog Web Application",
      description:
        "A blogging platform with authentication, CRUD features, and modern UI.",
      image: blog,
      link: "https://thinkscribe.vercel.app/",
      tech: ["React", "MongoDB", "Express"],
      source: "https://github.com/TheHiddenLoop/blogs-web-app",
    },
    {
      id: 6,
      title: "Expense Tracker with Redux",
      description:
        "A finance management app built with Redux for state management.",
      image: expense,
      link: "https://expense-apii.onrender.com/",
      tech: ["React", "Redux", "Chart.js"],
      source: "https://github.com/TheHiddenLoop/expense-tracker-redux",
    },
    {
      id: 7,
      title: "Authentication Application",
      description:
        "A secure authentication system with signup, login, and email verification.",
      image: auth,
      link: "https://auth-stack-app.onrender.com/",
      tech: ["Node.js", "JWT", "MongoDB"],
      source: "https://github.com/TheHiddenLoop/auth-stack-app",
    },
    {
      id: 8,
      title: "Gradient Generator App",
      description:
        "A web application to create, preview, and copy custom CSS gradients with ease.",
      image: gradient,
      link: "https://opulenx.vercel.app/",
      tech: ["React", "CSS", "Clipboard"],
      source: "https://github.com/TheHiddenLoop/gradient-generator",
    },
    {
      id: 9,
      title: "Inventory Management System",
      description:
        "A simple inventory tracking app to manage stock and products.",
      image: inventory,
      link: "https://inventory-management-system-3kay.onrender.com",
      tech: ["MERN", "REST API"],
      source: "https://github.com/TheHiddenLoop/Inventory-Management-System",
    },
    {
      id: 10,
      title: "Bank Management System",
      description:
        "A system to manage customer accounts, transactions, and banking operations.",
      image: bank,
      link: "https://github.com/TheHiddenLoop/bank-management-system",
      tech: ["Node.js", "HTML", "JS", "CSS"],
    },
  ],


  webDesign: [
    {
      id: 11,
      title: "Personal Portfolio",
      description:
        "A professional developer portfolio showcasing projects, skills, and experience with a modern layout.",
      image: portfolio,
      link: "https://angesh-portfolio.vercel.app/",
      tech: ["React", "Tailwind", "Framer-motion"],
      source: "https://github.com/TheHiddenLoop/portfolio"
    },
    {
      id: 12,
      title: "EstateMe – Real Estate UI",
      description:
        "A modern single-page real estate website UI featuring property sections, smooth layout, and a clean user-focused design.",
      image: estate,
      link: "https://estateme.vercel.app/",
      tech: ["React", "Tailwind"]
    },
    {
      id: 13,
      title: "50+ Mini Project HTML/CSS/JS",
      description:
        "A sleek and modern website built using HTML, CSS, and JavaScript with smooth animations.",
      image: html,
      link: "https://github.com/TheHiddenLoop/Javascript",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 14,
      title: "30+ Mini Project with React",
      description:
        "A small React project demonstrating component reusability and hooks.",
      image: react,
      link: "https://github.com/TheHiddenLoop/React-Projects",
      tech: ["React", "Hooks"],
    },
    {
      id: 15,
      title: "Nexcent",
      description:
        "A creative portfolio website with stunning visuals and clean UI.",
      image: nexcent,
      link: "https://buildwitharya.vercel.app/",
      tech: ["React", "Tailwind"],
      source: "https://github.com/TheHiddenLoop/code-verse",
    },
  ],

};
