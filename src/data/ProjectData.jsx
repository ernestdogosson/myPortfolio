import wordTyping from "../assets/wordTyping.png";
import movieLibrary from "../assets/movieLibrary.png";
import pokemon from "../assets/pokemon.png";
import tatoo from "../assets/tatoo.png";
import travelAgency from "../assets/travleAgency.png";

const ProjectsData = [
  {
    name: "Pokémon Guessing Game",
    githubRepo: "https://github.com/ernestdogosson/group-project-game",
    liveUrl: "https://pokewho-guess.netlify.app/",
    techStack: ["React", "Vite", "CSS", "PokeAPI"],
    projectDescription:
      "A group project where players identify Pokémon from their silhouettes before time runs out.",

    projectInfo:
      "View a Pokémon shadow and pick the correct name from four options. Tracks score, streaks, and personal bests across difficulty levels.",

    skillsLearned:
      "React state management, API integration, collaborative Git workflows, audio handling, and user authentication.",

    challenges:
      "Coordinating as a team with Git, syncing game state with UI, managing audio playback, and integrating the PokeAPI.",

    bgImage: pokemon,

    details: {
      longDescription:
        "A web-based educational game built as a group project using React and Vite. Players test their Pokémon knowledge by identifying silhouettes under time pressure. The game fetches real Pokémon data from the PokeAPI and includes features like difficulty levels, score tracking, background music, and user accounts to save progress.",

      features: [
        "Silhouette-based Pokémon guessing gameplay",
        "Multiple difficulty levels with varying time limits",
        "Score tracking with streaks and personal bests",
        "Audio system with background music and sound effects",
        "User accounts to save progress",
      ],

      designNotes:
        "Built collaboratively with a focus on component reusability and separation of concerns. Gained hands-on experience with team-based Git workflows and code review.",
    },
  },

  {
    name: "Ink & Soul Tattoo Studio",
    githubRepo:
      "https://github.com/ernestdogosson/TattooStudioWebsite--Ink-Soul",
    liveUrl: "https://ernestdogosson.github.io/TattooStudioWebsite--Ink-Soul",
    techStack: ["HTML", "CSS", "SVG"],
    projectDescription:
      "A dark-themed multi-page business website for a fictional tattoo studio.",

    projectInfo:
      "Four-page site with Home, About, Gallery, and Contact sections. Features custom SVG logo design and responsive layouts.",

    skillsLearned:
      "Multi-page navigation, custom SVG graphics with gradients, CSS Grid and Flexbox, responsive design, and collaborative Git workflows.",

    challenges:
      "Creating a cohesive dark aesthetic, designing custom SVG logos, and coordinating page styles across team members.",

    bgImage: tatoo,

    details: {
      longDescription:
        "A professional multi-page website built for a fictional tattoo studio as a group project. The site features a dark, moody aesthetic with custom SVG logo design, responsive layouts using CSS Grid and Flexbox, and professional typography with three complementary fonts. Built with pure HTML and CSS to demonstrate strong fundamentals.",

      features: [
        "Custom SVG logo with gradient effects",
        "Dark theme aesthetic suited to the tattoo industry",
        "Responsive design across mobile, tablet, and desktop",
        "Professional typography with Kaushan Script, New Rocker, and Roboto",
        "Contact form and social media integration",
      ],

      designNotes:
        "Focused on creating a visually cohesive brand identity through custom SVG work, dark color palettes, and carefully chosen typography. Practiced collaborative development with structured CSS organization.",
    },
  },

  {
    name: "Word Typing Game",
    githubRepo: "https://github.com/ernestdogosson/js-07",
    liveUrl: "https://kboardblitz.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectDescription: "Fast-paced typing game with timer challenges.",

    projectInfo:
      "Type randomly generated words before time runs out. Correct answers add bonus time and increase score.",

    skillsLearned:
      "DOM manipulation, event handling, timers, random generation, and game loop logic.",

    challenges:
      "Timer resets, score tracking, input detection, and UI state synchronization.",

    bgImage: wordTyping,

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
    name: "Movie Library App",
    githubRepo: "https://github.com/ernestdogosson/js-06",
    liveUrl: "https://ernestdogosson.github.io/movieLibraryApp/",
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
    name: "Bhromaon Travel Agency",
    githubRepo:
      "https://github.com/ernestdogosson/travel-agency-website--bharomaon",
    liveUrl:
      "https://ernestdogosson.github.io/travel-agency-website--bharomaon/",
    techStack: ["HTML", "SCSS", "JavaScript"],
    projectDescription:
      "A responsive multi-section travel agency website with clean SCSS architecture.",

    projectInfo:
      "Features a hero section with search, destination cards, testimonials, and a mobile hamburger menu with smooth scrolling navigation.",

    skillsLearned:
      "SCSS 7-1 architecture, Sass variables and mixins, responsive design with Flexbox and Grid, and hamburger menu animations.",

    challenges:
      "Organizing SCSS with the 7-1 pattern, building a responsive hamburger menu, and maintaining consistent styling across sections.",

    bgImage: travelAgency,

    details: {
      longDescription:
        "A multi-section travel agency website focused on clean SCSS architecture using the 7-1 folder pattern. The site features a hero section with integrated search, destination cards, a testimonials showcase, and smooth scrolling navigation. Built to practice structured Sass workflows and responsive design.",

      features: [
        "Hero section with integrated search functionality",
        "Hamburger menu with toggle animation for mobile",
        "Destination cards with responsive layouts",
        "Testimonials showcase section",
        "Smooth scrolling navigation",
      ],

      designNotes:
        "Focused on organized SCSS practices with the 7-1 architecture pattern, using variables, mixins, and partials for maintainable styling. Practiced responsive design with CSS Grid and Flexbox.",
    },
  },
];

export default ProjectsData;
