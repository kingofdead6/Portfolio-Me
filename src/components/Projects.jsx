import projectData from "./projectsData";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-[#2c105b] rounded-lg shadow-xl overflow-hidden transition-all duration-700 transform hover:scale-125 hover:shadow-2xl hover:shadow-[#ff00ff] hover:rotate-12 hover:skew-x-6 hover:bg-gradient-to-r hover:from-[#240d5f] hover:to-[#380c56] max-w-sm mx-auto border border-[#7e89ff] group hover:animate-float hover:animate-bounce group-hover:scale-110 hover:transition-all">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-all duration-700 hover:scale-150 hover:rotate-12 hover:skew-x-3 group-hover:shadow-2xl group-hover:shadow-[#ff00ff] group-hover:translate-y-[-10px] group-hover:animate-spin-slow group-hover:scale-110 group-hover:animate-pulse"
      />
      <div className="p-6 bg-gradient-to-r from-[#240d5f] to-[#2c105b] text-white relative z-10 transition-all duration-700 hover:scale-110 group-hover:opacity-80 group-hover:bg-[#240d5f] group-hover:shadow-2xl group-hover:shadow-[#ff00ff] group-hover:translate-x-5 group-hover:animate-pulse">
        <h3 className="text-2xl font-semibold text-[#d4c1ff] mb-2 transition-all duration-700 group-hover:text-[#ff00ff] group-hover:scale-125 group-hover:tracking-widest group-hover:animate-pulse group-hover:rotate-3 group-hover:scale-110 hover:animate-blink hover:translate-x-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#f0f0f0] mb-4 leading-relaxed transition-all duration-700 group-hover:opacity-80 group-hover:text-[#ff00ff] group-hover:translate-x-3 group-hover:animate-bounce group-hover:scale-110 group-hover:rotate-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#7e89ff] text-xs rounded-full shadow-sm shadow-[#5f74c3] transition-transform duration-300 hover:scale-150 hover:shadow-2xl hover:shadow-[#ff00ff] group-hover:animate-pulse hover:animate-ping hover:translate-y-[-5px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveDemo}
            className="px-4 py-2 bg-[#7e89ff] text-sm text-white rounded-lg hover:bg-[#5f74c3] transition-all duration-500 shadow-xl shadow-[#ff00ff] hover:scale-105 hover:shadow-xl hover:shadow-[#ff00ff] transform group-hover:translate-y-[-5px] group-hover:animate-pulse group-hover:rotate-3 hover:transition-all hover:animate-spin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            className="px-4 py-2 border-2 border-[#7e89ff] text-sm text-[#7e89ff] rounded-lg hover:bg-[#7e89ff] hover:text-white transition-all duration-500 shadow-md shadow-[#5f74c3] hover:scale-105 hover:shadow-xl hover:shadow-[#ff00ff] transform group-hover:translate-y-[-5px] group-hover:animate-pulse group-hover:rotate-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#14082a] py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-4xl font-bold text-[#d4c1ff] mb-8 text-shadow-2xl transform group-hover:rotate-3 group-hover:scale-125 group-hover:text-[#ff00ff] animate-pulse">
          Projects
        </h2>
        <p className="text-lg text-[#f0f0f0] mb-12 transition-all duration-700 group-hover:text-[#ff00ff] group-hover:scale-125 group-hover:tracking-widest group-hover:animate-bounce">
          Here are some of the projects I’ve worked on recently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-[#d4c1ff] mt-16 text-shadow-2xl transform group-hover:rotate-3 group-hover:scale-125 group-hover:text-[#ff00ff] animate-pulse hover:text-[#ff00ff] hover:shadow-xl hover:shadow-[#ff00ff] hover:translate-x-2 hover:scale-110">
  For More Projects Check my GitHub
</h2>

      </div>
    </section>
  );
};

export default ProjectsSection;
