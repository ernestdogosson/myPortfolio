import Project from "./Projects.jsx";
import ProjectsData from "../data/ProjectData.jsx";
import { useState } from "react";

function ProjectSection() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 mb-8">
      <div className="mb-4 md:mb-6 lg:mb-8 text-center">
        <h3 className="text-sm text-blue-500 mb-2">PROJECTS</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">My Recent Work</h2>
        <h3 className="text-gray-600">A selection of projects I've built</h3>
      </div>

      <div className="mb-16 mx-auto w-full md:w-3/5 lg:w-2/5">
        <input
          type="text"
          className="w-full bg-gray-50 border p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.filter((project) =>
          project.techStack.some((techStack) =>
            techStack.toLowerCase().includes(search.toLowerCase()),
          ),
        )

          .map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.projectDescription}
              info={project.projectInfo}
              challenges={project.challenges}
              skillsLearned={project.skillsLearned}
              bgImage={project.bgImage}
              bgSize={index === 2 ? "contain" : "cover"}
              techStack={project.techStack}
              githubRepo={project.githubRepo}
              details={project.details}
            />
          )) }
      </div>
    </div>
  );
}

export default ProjectSection;
