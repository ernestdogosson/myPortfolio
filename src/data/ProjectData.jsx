import pokemon from "../assets/pokemon.jpg";
import travelAgency from "../assets/travleAgency.jpg";
import pitchsideScores from "../assets/pitchside-scores.jpg";

const ProjectsData = [
  {
    name: "Pitchside Scores",
    githubRepo: "https://github.com/ernestdogosson/pitchside-scores",
    liveUrl: "https://pitchside-scores-frontend.vercel.app/",
    techStack: ["React", "Vite", "Tailwind", "Express", "Prisma", "PostgreSQL", "Auth0", "Docker", "GitHub Actions"],
    projectDescription:
      "A scoreboard for amateur football matches, built around a crowd-reported consensus score instead of a single referee.",

    projectInfo:
      "Anyone can browse fixtures and results. Logged-in users add fixtures and report scorelines, and the app derives a consensus score from everyone's reports rather than trusting a single submission.",

    skillsLearned:
      "Fullstack architecture with Express and Prisma, PostgreSQL data modeling, Auth0 session-based authentication, multi-stage Docker builds, and CI/CD with GitHub Actions.",

    challenges:
      "A split Vercel-frontend/Render-backend deploy broke on session cookies (Chrome blocks third-party cookies by default), so the app was collapsed into a single-origin Render deployment to eliminate the cross-origin surface entirely.",

    bgImage: pitchsideScores,

    details: {
      longDescription:
        "A solo-built fullstack app for reporting and settling amateur football scorelines. The core of the project is a consensus algorithm that tallies reported scores and only returns a result when reports agree, or returns null below a configurable threshold rather than guessing a winner. Ships with a real CI pipeline: a Postgres service container, Prisma migrations, a full test run, and a separate clean Docker build check on every push.",

      features: [
        "Consensus algorithm that resolves crowd-reported scorelines and returns no result on a tie",
        "Auth0 session-cookie authentication, HttpOnly, no tokens exposed to client JS",
        "Multi-stage Dockerfile: a frontend build stage, then a single backend runtime that serves the built bundle",
        "CI pipeline with a live Postgres service container, migration deploy, and 27 tests",
        "Persistent Postgres storage, needed so Render's free-tier container sleep/wake cycle doesn't lose data",
      ],

      designNotes:
        "Moved from a split frontend/backend deployment to a single Render service after third-party cookie blocking broke session auth across origins. Same-origin ended up stricter than a locked-down CORS policy would have been, a real architectural tradeoff worth flagging on a team.",
    },
  },

  {
    name: "Employee Scheduling App",
    githubRepo: "https://github.com/ernestdogosson/employee-scheduling-app",
    liveUrl: "",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Express", "Prisma", "PostgreSQL", "Zod", "JWT"],
    projectDescription:
      "A role-based scheduling tool: employers add staff and assign shifts, employees mark their availability.",

    projectInfo:
      "Employers manage a weekly shift grid and see who's available before assigning. Employees log in to mark availability and view their assigned shifts. Two distinct roles, two distinct sets of permissions.",

    skillsLearned:
      "TypeScript across a fullstack app, Express 5 middleware chains, Prisma relational modeling with cascade deletes, role-based access control, and JWT authentication.",

    challenges:
      "Designing a relational schema that prevents double-booking: composite uniqueness constraints on employee, date, and shift enforce that at the database level rather than trusting application logic alone.",

    bgImage: null,

    details: {
      longDescription:
        "A fullstack scheduling app built with React, TypeScript, and Express, with EMPLOYER and EMPLOYEE roles kept separate at every layer. Five middleware layers handle auth, role enforcement, request validation, error handling, and logging, so route handlers only deal with business logic. The schema went through three real migrations as the auth model changed, starting with passwords, then moving to a lighter login code once a traditional password stopped being the right fit for the use case.",

      features: [
        "Role-based access for EMPLOYER and EMPLOYEE, enforced by a requireRole middleware",
        "Five middleware layers: auth, role check, Zod validation, error handling, request logging",
        "Route-per-resource backend covering auth, employees, availability, schedules, and shifts",
        "Composite uniqueness constraints prevent double-booking at the database level",
        "One central error-handling middleware maps Zod and Prisma errors to the correct HTTP status",
      ],

      designNotes:
        "Chose an email plus 4-digit login code over a traditional password for this use case. It's an access code with a bounded keyspace, sized to the actual risk of an internal scheduling tool, not password-grade security.",
    },
  },

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
