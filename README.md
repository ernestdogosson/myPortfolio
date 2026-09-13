# React Portfolio Website

A single-page portfolio website built with React to showcase web development projects. Features a project gallery, search functionality, and smooth-scroll navigation.

## Tech Stack

- React 19
- Framer Motion
- Tailwind CSS
- Vite

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProjectPopup.jsx
│   └── ProjectSection.jsx
├── sections/
│   ├── HeroSection.jsx
│   ├── Portfolio.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   ├── ProjectData.jsx
│   └── techColors.js
├── assets/
│   └── (project images)
├── App.jsx
└── main.jsx
```

## Features

- Project gallery with grid layout
- Search functionality to filter projects by tech stack
- Modal popups for detailed project information
- Smooth-scroll single-page navigation
- Component-based architecture

## How to Run

```bash
npm install
npm run dev
```

## Implementation Details

- React functional components with hooks
- Smooth-scroll navigation between page sections
- Utility-first styling with Tailwind CSS
- State management for search and filtering
- Props drilling for component communication

## Deployment

Hosted on Netlify, built automatically from `main` via `netlify.toml` (`npm run build` → `dist`).

---

Built with React, Tailwind CSS, and modern web development practices.
