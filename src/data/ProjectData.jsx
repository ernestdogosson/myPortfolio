import travleAgency from "../assets/travelAgency.png";
import wordGame from "../assets/word-game.png";
import movieLibrary from "../assets/movieLibrary.png";

const ProjectsData = [
  {
    name: "Travel Agency Website",
    githubRepo: "https://github.com/ernestdogosson/assignment-15",
    liveUrl: "https://ernestdogosson.github.io/assignment-15/",
    techStack: ["HTML", "Bootstrap", "CSS"],
    projectDescription:
      "Responsive travel agency showcasing destinations and packages.",

    projectInfo:
      "Explore destinations, view packages, and navigate About, Services, Gallery, and Contact sections.",

    skillsLearned:
      "Multi-section layouts, Bootstrap grid utilities, and responsive design techniques.",

    challenges:
      "Layout alignment, optimized spacing and responsiveness across all pages.",

    bgImage: travleAgency,

    details: {
      longDescription:
        "A fully responsive multi-page travel agency website built using HTML, CSS, and Bootstrap. The site includes a structured layout with dedicated pages for destinations, services, gallery, and contact forms. It was designed to mimic a real-world commercial landing page while practicing modular section design.",

      features: [
        "Multi-page structure with navbar routing",
        "Image gallery with responsive grid",
        "Contact form layout",
        "Custom color scheme and typography",
      ],

      designNotes:
        "Used Bootstrap utilities to keep the layout flexible and consistent. Focused on spacing, structure, and creating a clean visual hierarchy.",
    },
  },

  {
    name: "Word Typing Game",
    githubRepo: "https://github.com/ernestdogosson/js-07",
    liveUrl: "https://ernestdogosson.github.io/js-07/", // Add your live URL
    techStack: ["HTML", "CSS", "JavaScript"],
    projectDescription: "Fast-paced typing game with timer challenges.",

    projectInfo:
      "Type randomly generated words before time runs out. Correct answers add bonus time and increase score.",

    skillsLearned:
      "DOM manipulation, event handling, timers, random generation, and game loop logic.",

    challenges:
      "Timer resets, score tracking, input detection, and UI state synchronization.",

    bgImage: wordGame,

    details: {
      longDescription:
        "A fast-paced browser typing game where players race against a countdown timer. Each correct word adds time and increases the score. This project helped me understand logic flow, state handling, and DOM-driven UI updates.",

      features: [
        "Random word generation",
        "Live scoring system",
        "Countdown timer logic",
        "Difficulty adjustments",
      ],

      designNotes:
        "Focused on fast feedback through UI updates and clean input experience for the user. Learned how to sync game logic with visual state changes.",
    },
  },

  {
    name: "Portfolio Website",
    githubRepo: "https://github.com/ernestdogosson/react-01",
    liveUrl: "https://ernestdogosson.github.io/react-01/", // Add your live URL
    techStack: ["React", "React Router", "Tailwind CSS"],
    projectDescription:
      "Personal portfolio website with multi-page navigation.",

    projectInfo:
      "Professional portfolio showcasing projects, skills, and contact information with smooth routing and modern design.",

    skillsLearned:
      "React Router implementation, component architecture, responsive design with Tailwind, and state management.",

    challenges:
      "Setting up routing structure, component organization, and maintaining consistent design across pages.",

    bgImage: null,

    details: {
      longDescription:
        "A modern, fully responsive portfolio website built with React and React Router. Features smooth page navigation, project showcase with filtering, about section, and contact form. Demonstrates professional frontend development skills with clean component architecture and modern design patterns.",

      features: [
        "Multi-page SPA with React Router",
        "Dynamic project filtering and search",
        "Responsive design for all devices",
        "Component-based architecture",
        "Modern UI with Tailwind CSS",
      ],

      designNotes:
        "Focused on clean, maintainable code structure and professional presentation. Used React Router for seamless navigation and Tailwind for rapid, consistent styling.",
    },
  },

  {
    name: "Movie Library App",
    githubRepo: "https://github.com/ernestdogosson/js-06",
    liveUrl: "https://ernestdogosson.github.io/movieLibraryApp/", // Add your live URL
    techStack: ["JavaScript", "HTML", "CSS"],
    projectDescription: "Track and organize your movie collection.",

    projectInfo:
      "Browse, add, delete movies, and mark them as watched or unwatched with dynamic UI updates.",

    skillsLearned:
      "Dynamic lists with JavaScript, user interactions, and DOM updates without frameworks.",

    challenges:
      "Dynamic rendering, state management with arrays/objects, and watch status toggling.",

    bgImage: movieLibrary,

    details: {
      longDescription:
        "A fully interactive movie collection app built with vanilla JavaScript. It supports adding movies, toggling watched status, and deleting entries. Every interaction immediately updates the UI, making it a small but effective practice in state-driven interfaces.",

      features: [
        "Add/remove movies to a dynamic list",
        "Watched/unwatched toggle",
        "Local in-memory state management",
        "Clean and minimal UI with real-time updates",
      ],

      designNotes:
        "The biggest focus was clarity and user feedback. Learned to manage multiple layers of UI state without relying on frameworks.",
    },
  },

  {
    name: "Coming Soon",
    githubRepo: null,
    liveUrl: null,
    techStack: ["React", "Node.js", "MongoDB"],
    projectDescription: "New project in development.",

    projectInfo:
      "Details coming soon. This space is reserved for an upcoming project.",

    skillsLearned:
      "Full-stack development, database design, and API integration.",

    challenges:
      "Building scalable architecture and implementing modern best practices.",

    bgImage: null,
    bgSize: "cover",

    details: {
      longDescription:
        "This project is currently in development. Check back soon for updates on this exciting new addition to the portfolio.",

      features: [
        "Feature details coming soon",
        "Modern tech stack",
        "Responsive design",
        "Performance optimized",
      ],

      designNotes:
        "Design documentation will be added once the project reaches its first milestone.",
    },
  },
];

export default ProjectsData;
