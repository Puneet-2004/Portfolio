interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
      <div className="border p-4 rounded mb-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{description}</p>
        {image && <img src={image} alt={title} className="mt-2" />}
      </div>
    );
  };
  
  export default ProjectCard;
  