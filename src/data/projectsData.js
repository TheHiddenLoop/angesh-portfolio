import auth from "../asset/auth.png";
import inventory from "../asset/inventry.png";
import bank from "../asset/bank.png";
import chat from "../asset/chat.png";
import expense from "../asset/expense.png";
import html from "../asset/html.jpeg";
import react from "../asset/react.jpeg";
import blog from "../asset/blog.png";
import nexcent from "../asset/image.png";
import gradient from "../asset/gradient.png";
import ecom from "../asset/ecom.png";
import aiSaas from "../asset/aiSaas.png"

export const projectsData = {
    fullStack: [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart, checkout, and Stripe payment integration.",
    image: ecom,
    link: "https://e-commerce-2-0r1h.onrender.com/",
    tech: ["MERN", "Stripe", "Redux"],
  },
  {
    id: 2,
    title: "AI SaaS Platform",
    description:
      "A subscription-based AI SaaS platform that allows to generate blogs, images, and resume reviews API, with authentication and payment powered by Clerk.",
    image: aiSaas, 
    link: "https://cognifyx-ai.vercel.app/",
    tech: ["PERN", "Clerk", "Gemini", "Clipdrop"],
  },
  {
    id: 3,
    title: "Chat Based Web Application",
    description:
      "A real-time chat application built with authentication and socket-based communication.",
    image: chat,
    link: "https://chat-app-5t98.onrender.com/",
    tech: ["React", "Socket.io", "Node.js"],
  },
  {
    id: 4,
    title: "Blog Web Application",
    description:
      "A blogging platform with authentication, CRUD features, and modern UI.",
    image: blog,
    link: "https://thinkscribe.vercel.app/",
    tech: ["React", "MongoDB", "Express"],
  },
  {
    id: 5,
    title: "Expense Tracker with Redux",
    description:
      "A finance management app built with Redux for state management.",
    image: expense,
    link: "https://expense-apii.onrender.com/",
    tech: ["React", "Redux", "Chart.js"],
  },
  {
    id: 6,
    title: "Authentication Application",
    description:
      "A secure authentication system with signup, login, and email verification.",
    image: auth,
    link: "https://auth-stack-app.onrender.com/",
    tech: ["Node.js", "JWT", "MongoDB"],
  },
  {
    id: 7,
    title: "Gradient Generator App",
    description:
      "A web application to create, preview, and copy custom CSS gradients with ease.",
    image: gradient,
    link: "https://opulenx.vercel.app/",
    tech: ["React", "CSS", "Clipboard"],
  },
  {
    id: 8,
    title: "Inventory Management System",
    description:
      "A simple inventory tracking app to manage stock and products.",
    image: inventory,
    link: "https://inventory-management-system-3kay.onrender.com",
    tech: ["MERN", "REST API"],
  },
  {
    id: 9,
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
        id: 8,
        title: "50+ Mini Project HTML/CSS/JS",
        description:
          "A sleek and modern website built using HTML, CSS, and JavaScript with smooth animations.",
        image: html,
        link: "https://github.com/TheHiddenLoop/Javascript",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 9,
        title: "Nexcent",
        description:
          "A creative portfolio website with stunning visuals and clean UI.",
        image: nexcent,
        link: "https://buildwitharya.vercel.app/",
        tech: ["React", "Tailwind"],
      },
      {
        id: 10,
        title: "30+ Mini Project with React",
        description:
          "A small React project demonstrating component reusability and hooks.",
        image: react,
        link: "https://github.com/TheHiddenLoop/React-Projects",
        tech: ["React", "Hooks"],
      },
    ],
  };