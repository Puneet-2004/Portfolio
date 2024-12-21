interface ImageCardProps {
    src: string;
    description: string;
  }
  
  const ImageCard: React.FC<ImageCardProps> = ({ src, description }) => {
    return (
      <div className="border p-4 rounded mb-4">
        <img src={src} alt={description} className="mb-2" />
        <p>{description}</p>
      </div>
    );
  };
  
  export default ImageCard;
  