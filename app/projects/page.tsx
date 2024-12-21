import ProjectCard from "@/components/ProjectCard";

const ProjectsPage: React.FC = () => {
  const projects = [
    { title: "Project 1", description: "Description 1", image: "/project1.png" },
    { title: "Project 2", description: "Description 2", image: "/project2.png" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
